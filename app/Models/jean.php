<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class jean extends Model
{
    use HasFactory;
    protected $primaryKey = 'pid';
    public $timestamps = false;
}
