<?php

namespace App\Http\Controllers;

use App\Models\Bookings;
use App\Models\GymClass;
use App\Wrapper\JsonApiResponse;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class BookingsController extends Controller
{
    public function bookClass(Request $request, JsonApiResponse $response): JsonResponse
    {
        $user = Auth::id();
        if (!$request->all()) {
            $response->setStatusText('No data provided');
            $response->setStatusCode(404);
            $response->setReturnData([]);
        }

        $request->validate([
            'id_class' => 'required|exists:gymclasses,id'
        ]);

        $clasa = GymClass::find($request->id_class);
        if (!$clasa) {
            $response->setStatusText('No matching class !');
            $response->setStatusCode(422);
            $response->setReturnData([]);
            return $response->getResponse();
        }


        $rezervareExista = Bookings::where('user_id', $user)
            ->where('id_class', $request->id_class)
            ->exists();

        if ($rezervareExista) {// sa schimb statusul ca in doc
            $response->setStatusText('You already have booked this class !');
            $response->setStatusCode(422);
            $response->setReturnData([]);
            return $response->getResponse();
        }

        if ($clasa->remaining_seats <= 0) {
            $response->setStatusText('No remaining seats !');
            $response->setStatusCode(422);
            $response->setReturnData([]);
            return $response->getResponse();
        }

        $rezervare = new Bookings();
        $rezervare->user_id = $user;
        $rezervare->id_class = $clasa->id;
        $rezervare->save();

        $clasa->remaining_seats--;
        $clasa->save();

        $response->setStatusText('Success !');
        $response->setStatusCode(200);
        $response->setReturnData([$clasa]);
        return $response->getResponse();
    }

    public function cancelReservation(Request $request, JsonApiResponse $response): JsonResponse
    {
        $id = $request->input('id_class');
        $user = Auth::id();
        $reservation = Bookings::where('user_id', $user)->where('id_class', $id)->first();

        $curs = GymClass::find($id);
        if (!$reservation) {
            $response->setStatusText('First you need to book a class !');
            $response->setStatusCode(422);
            $response->setReturnData([]);
            return $response->getResponse();
        }
        if ($curs->remaining_seats < $curs->seats) {
            $curs->remaining_seats += 1;
            $curs->save();
        }

        $reservation->delete();
        $response->setStatusText('Success !');
        $response->setStatusCode(200);
        $response->setReturnData([]);
        return $response->getResponse();
    }
}
