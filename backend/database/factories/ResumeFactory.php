<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Resume>
 */
class ResumeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    // $table->foreignIdFor(User::class);
    //         $table->text('resume_path');
    public function definition(): array
    {
        return [
            'user_id' => fake()->numberBetween(1, 20),
            'resume_path' => fake()->url()
        ];
    }
}
