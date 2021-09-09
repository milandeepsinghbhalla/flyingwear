<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class short extends Model
{
    use HasFactory;
    protected $primaryKey = 'pid';
    public $timestamps = false;

}
