<?php

namespace App\Http\Controllers;

use App\Models\UserImage;
use App\Wrapper\JsonApiResponse;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ImageController extends Controller
{
    public function upload(Request $request)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'user_id' => 'required|integer|exists:users,id'
        ]);

        $image = $request->file('image');
        $imageName = time() . '_' . $image->getClientOriginalName();
        $filePath = $imageName;

        $imageContent = file_get_contents($image->getRealPath());

        file_put_contents(public_path($filePath), $imageContent);
        $userImg = UserImage::where('user_id', Auth::id())->first();

        if ($userImg) {
            $userImg->image = $filePath;
            $userImg->save();
        } else {
            $userImg = new UserImage();
            $userImg->user_id = $request->user_id;
            $userImg->image = $filePath;
            $userImg->save();
        }
        return response()->json(['imagePath' => $filePath, 'user_id' => $request->user_id]);
    }

    public function getPhoto( JsonApiResponse $response) : JsonResponse{
        $user= Auth::id();
        $userImage=UserImage::where('user_id', $user)->orderBy('updated_at', 'desc')->first();

        if($userImage){
            $response->setStatusText('Success');
            $response->setStatusCode(200);
            $response->setReturnData($userImage);

        }else{
            $response->setStatusText('not found');
            $response->setStatusCode(404);
            $response->setReturnData([]);
        }
        return $response->getResponse();
    }

}
