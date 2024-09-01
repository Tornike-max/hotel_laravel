<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class ApplicationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    // $table->foreignIdFor(Career::class);
    //         $table->foreignIdFor(User::class);
    //         $table->longText('cover_letter');
    //         $table->text('resume_url');
    //         $table->text('status');
    public function definition(): array
    {
        return [
            'user_id' => fake()->numberBetween(1, 20),
            'career_id' => fake()->numberBetween(1, 20),
            'cover_letter' => fake()->realText(),
            'resume_url' => fake()->url(),
            'status' => fake()->randomElement(['pending', 'accepted', 'rejected']),

        ];
    }
}
