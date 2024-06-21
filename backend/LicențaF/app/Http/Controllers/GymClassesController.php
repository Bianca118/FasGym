<?php

namespace App\Http\Controllers;

use App\Models\GymClass;
use App\Wrapper\JsonApiResponse;
use Illuminate\Http\JsonResponse;

class GymClassesController extends Controller
{
    public function getClasses(JsonApiResponse $response): JsonResponse
    {
        $user = GymClass::with('trainer:id,name')->get(['id', 'id_trainer', 'name', 'date', 'seats', 'remaining_seats']);

        if ($user) {
            $response->setStatusText('Success');
            $response->setStatusCode(200);
            $response->setReturnData($user);

        } else {
            $response->setStatusText('not found');
            $response->setStatusCode(404);
            $response->setReturnData([]);
        }
        return $response->getResponse();
    }
}
