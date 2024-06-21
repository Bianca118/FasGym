<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GymClass extends Model
{
    use HasFactory;
    protected $table = 'gymclasses';
    protected $fillable = ['remaining_seats'];
    public function trainer(){
        return $this->belongsTo(Trainer::class, 'id_trainer');
    }
    public function users()
    {
        return $this->belongsToMany(User::class, 'bookings')->withTimestamps();
    }
}
