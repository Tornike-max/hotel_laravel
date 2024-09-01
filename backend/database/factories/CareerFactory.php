<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Career>
 */
class CareerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    // $table->text('title');
    // $table->longText('description');
    // $table->foreignIdFor(Company::class);
    // $table->text('location');
    // $table->text('salary');
    // $table->text('employment_type');
    // $table->text('experience_level');
    public function definition(): array
    {
        return [
            'title' => fake()->title(),
            'description' => fake()->realText(),
            'company_id' => fake()->numberBetween(1, 10),
            'location' => fake()->word(),
            'salary' => fake()->numberBetween(500, 5000),
            'employment_type' => fake()->randomElement(['Full-time', 'Part-time', 'Contract', 'Hybrid']),
            'experience_level' => fake()->randomElement(['Entry-time', 'Part-level', 'Senior-level']),
        ];
    }
}
