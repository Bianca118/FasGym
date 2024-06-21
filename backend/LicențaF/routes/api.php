<?php

use App\Http\Controllers\BookingsController;
use App\Http\Controllers\GymClassesController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\PlansController;
use App\Http\Controllers\QrCodeController;
use App\Http\Controllers\SubscriptionController;
use App\Http\Controllers\TrainerController;
use App\Http\Controllers\UserController;
use App\Models\UserImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    $user = $request->user();

    if ($user) {
        return response()->json([
            'data' => $user,
            'status' => 'success',
            'message' => 'User information retrieved successfully'
        ], 200);
    } else {
        return response()->json([
            'status' => 'error',
            'message' => 'User not found'
        ], 404);
    }
});
Route::post('register',[UserController::class,'register']);
Route::post('login',[UserController::class,'login']);
Route::middleware('auth:sanctum')->post('logout',[UserController::class,'logout']);
Route::middleware('auth:sanctum')->get('detail',[UserController::class,'getUserDetails']);
Route::get('trainers',[TrainerController::class,'getTrainers']);
Route::middleware('auth:sanctum')->get('classes',[GymClassesController::class,'getClasses']);
Route::get('plans',[PlansController::class,'getPlans']);
Route::middleware('auth:sanctum')->post('subscription',[SubscriptionController::class,'subscriptions']);
Route::post('poza',[ImageController::class,'upload']);
Route::middleware('auth:sanctum')->post('rezervari',[BookingsController::class,'bookClass']);
Route::middleware('auth:sanctum')->patch('updateInfoUser',[UserController::class,'updateUser']);
Route::middleware('auth:sanctum')->delete('cancel',[BookingsController::class,'cancelReservation']);
Route::middleware('auth:sanctum')->get('infoSubscr',[SubscriptionController::class,'getSubscriptionInfo']);
Route::middleware('auth:sanctum')->get('getPhoto',[ImageController::class,'getPhoto']);

Route::get('/lala', [QrCodeController::class, 'show']);
