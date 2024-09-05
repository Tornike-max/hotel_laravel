<?php

namespace App\Http\Resources;

use App\Models\Career;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CompanyResource extends JsonResource
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
            'name' => $this->name,
            'website' => $this->website,
            'logo' => $this->logo,
            'description' => $this->description,
            'careers' => CareerResource::collection($this->whenLoaded('careers')),
            'user' => new UserResource($this->whenLoaded('user')),
        ];
    }
}
