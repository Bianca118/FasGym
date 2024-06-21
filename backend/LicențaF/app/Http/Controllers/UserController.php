<?php

namespace  App\Http\Controllers;
use App\Models\Subscription;
use App\Models\User;
use App\Wrapper\JsonApiResponse;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;use Illuminate\Support\Facades\Session;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use function PHPUnit\Framework\isEmpty;

class UserController extends Controller{
    public function register(Request $request, JsonApiResponse $response) :JsonResponse
    {

        $name = $request->input('name');
        $email = $request->input('email');
        $password = $request->input('password');
        $phone = $request->input('phone');

        if(empty($name) || empty($email) || empty($password) || empty($phone)){
            $response->setStatusText('Invalid credentials !');
            $response->setStatusCode(422);
            $response->setReturnData(['Missing parameters!']);
            return $response->getResponse();
        }

        $existingUser = User::where('email', $email)->first();
        if ($existingUser) {
            $response->setStatusText('User already exist. Provide another email !');
            $response->setStatusCode(404);
            $response->setReturnData([]);
            return $response->getResponse();
        }

        $user = User::create([
            'name' => $name,
            'email' => $email,
            'password' => bcrypt($password),
            'phone' => $phone,
        ]);

        if($user){
            $response->setStatusText('Success');
            $response->setStatusCode(200);
            $response->setReturnData($user);
        }else{
            $response->setStatusText('Unable');
            $response->setStatusCode(404);
            $response->setReturnData([]);}

        $qrCode = QrCode::format('png')->size(200)->generate($user->email);
        $filePath = 'QrCodes/' . $user->id . '.png';
        file_put_contents(public_path($filePath), $qrCode);
        $user->update(['qr_code' => $filePath]);

        return $response->getResponse();
    }
    public function login(Request $request,JsonApiResponse $response) :JsonResponse{

        $email = $request->input('email');
        $password = $request->input('password');

        if (Auth::attempt(['email' => $email, 'password' => $password])) {
            $user = Auth::user();
            $token = $user->createToken($user->name . '-AuthToken')->plainTextToken;
            $response->setStatusText('Success');
            $response->setStatusCode(200);
            $response->setToken($token);
            $response->setReturnData($user);
        } else{
            $response->setStatusText('Invalid credentials !');
            $response->setStatusCode(422);
            $response->setReturnData([]);
        }

        return $response->getResponse();
    }
    public function logout(Request $request){
        try {
            $user = $request->user();
            if (!$user) {
                throw new \Exception('User not authenticated', 401);
            }

            $user->tokens()->delete();

            return response()->json([
                'message' => 'Successfully logged out'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], $e->getCode());
        }
    }

    public function getUserDetails(JsonApiResponse $response,Request $request) :JsonResponse{
        $user = Auth::user();
        $token = $request->bearerToken();
        if($user){
            $response->setStatusText('Success');
            $response->setStatusCode(200);
            $response->setToken($token);
            $response->setReturnData($user);
        }else{
            $response->setStatusText('Unauthorized !');
            $response->setStatusCode(404);
            $response->setReturnData([]);
        }
        return $response->getResponse();
    }

    public function updateUser(JsonApiResponse $response, Request $request): JsonResponse{
        $user = Auth::id();
        $name = $request->input('name');
        $phone = $request->input('phone');
        if(!$request->all()){
            $response->setStatusText('Missing parameters !');
            $response->setStatusCode(422);
            $response->setReturnData([]);
            return $response->getResponse();

        }
        $foundUser = User::find($user);

        $foundUser->name = $name;
        $foundUser->phone = $phone;

        $foundUser->save();
        $response->setStatusText('Success');
        $response->setStatusCode(200);
        $response->setReturnData($foundUser);
        return $response->getResponse();
    }
}
