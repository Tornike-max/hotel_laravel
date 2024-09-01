<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Company>
 */
class CompanyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    // $table->text('string');
    //         $table->text('website');
    //         $table->text('logo');
    //         $table->longText('description');
    //         $table->foreignIdFor(User::class);
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'logo' => fake()->imageUrl(),
            'description' => fake()->realText(200),
            'website' => fake()->url(),
            'user_id' => fake()->numberBetween(1, 10),
        ];
    }
}
