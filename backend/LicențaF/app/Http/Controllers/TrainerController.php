<?php

namespace App\Http\Controllers;

use App\Models\Trainer;
use App\Models\User;
use App\Wrapper\JsonApiResponse;
use Illuminate\Http\JsonResponse;

class TrainerController extends Controller{
    public function getTrainers(JsonApiResponse $response) :JsonResponse
    {
        $user=Trainer::all();
    if($user){
    $response->setStatusText('Success');
    $response->setStatusCode(200);
    $response->setReturnData($user);

    }else{
    $response->setStatusText('not found');
    $response->setStatusCode(404);
    $response->setReturnData([]);
    }
        return $response->getResponse();
    }
}
