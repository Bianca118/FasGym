<?php

namespace App\Models;

use App\Http\Controllers\GymClassesController;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bookings extends Model
{
    use HasFactory;
    protected $table = 'bookings';
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function gymClasses()
    {
        return $this->belongsTo(GymClass::class);
    }
}
