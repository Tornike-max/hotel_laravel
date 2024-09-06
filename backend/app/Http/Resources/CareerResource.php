<?php

namespace App\Http\Resources;

use App\Models\Company;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CareerResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'company' => new CompanyResource($this->whenLoaded('company')),
            'category' => new CategoryResource($this->whenLoaded('category')),
            'skills' => new CategoryResource($this->whenLoaded('skills')),
            'location' => $this->location,
            'salary' => $this->salary,
            'employment_type' => $this->employment_type,
            'experience_level' => $this->experience_level,
            'created_at' => $this->created_at
        ];
    }
}
