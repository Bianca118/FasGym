<?php

namespace App\Http\Controllers;

use App\Models\Plan;
use App\Wrapper\JsonApiResponse;
use Illuminate\Http\JsonResponse;

class PlansController extends Controller{
    public function getPlans(JsonApiResponse $response) :JsonResponse
    {
        $user=Plan::all();
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
