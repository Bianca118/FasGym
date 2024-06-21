<?php
namespace App\Http\Controllers;

use App\Wrapper\JsonApiResponse;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Models\Subscription;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\JsonResponse;

class SubscriptionController extends Controller {
public function subscriptions(Request $request,JsonApiResponse $response):JsonResponse
{
    $user=Auth::id();
    if (!$request->all()) {
        $response->setStatusText('No data provided');
        $response->setStatusCode(404);
        $response->setReturnData([]);
    }
        $request->validate([
        'id_plan' => 'required|exists:plans,id'
        ]);
    $planId = $request->input('id_plan');
    $status=1;
    $now=Carbon::today();
    $endDate = $now->copy()->addDays(30);
    $currentDate = Carbon::now();
    Subscription::where('status', '1')
        ->where('end_date', '<', $currentDate)
        ->update(['status' => '0']);

    $activeSubscription = Subscription::where('user_id', $user)
        ->where('id_plan', $planId)
        ->where('status', '1')
        ->first();

    if ($activeSubscription) {
        $response->setStatusText('You already have another active plan !');
        $response->setStatusCode(422);
        $response->setReturnData([]);
        return $response->getResponse();
    }

        $subscription = Subscription::create([
            'start_date' => $now,
            'end_date' => $endDate,
            'id_plan' => $request->id_plan,
            'status' => $status,
            'user_id' => $user,
        ]);

        if($subscription){
            $response->setStatusText('Succes');
            $response->setStatusCode(200);
            $response->setReturnData($subscription);
        }

    return $response->getResponse();
}

    public function getSubscriptionInfo(Request $request,JsonApiResponse $response):JsonResponse
    {
        $user=Auth::id();
        if (!$request->all()) {
            $response->setStatusText('No data provided');
            $response->setStatusCode(404);
            $response->setReturnData([]);
        }

        $subscriptions = Subscription::where('user_id', $user)
            ->where('status',1)
            ->first();

        if (!$subscriptions) {
            $response->setStatusText('Not found !');
            $response->setStatusCode(404);
            $response->setReturnData([]);
            return $response->getResponse();
        }


            $response->setStatusText('Succes');
            $response->setStatusCode(200);
            $response->setReturnData($subscriptions);

        return $response->getResponse();
    }
}
