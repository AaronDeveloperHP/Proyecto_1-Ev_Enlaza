<?php

namespace App\Models;

use Laravel\Passport\HasApiTokens;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
class Petition extends Model
{
    use HasApiTokens, Notifiable;

    protected $fillable = [
        'title',
        'action',
        'description',
        'state',
        'origin',
        'start_date',
        'end_date'
        ];

}
