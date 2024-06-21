<?php

namespace App\Models;

use App\Http\Controllers\GymClassesController;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Trainer extends Model
{
    use HasFactory;
    public function gymClasses()
    {
        return $this->hasMany(GymClass::class);
    }
}
