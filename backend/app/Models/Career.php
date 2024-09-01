<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Career extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'location',
        'salary',
        'employment_type',
        'experience_level',
        'company_id'
    ];
    public function company()
    {
        return $this->belongsTo(Skill::class);
    }

    public function skills()
    {
        return $this->belongsToMany(Skill::class, 'career_skills');
    }
}
