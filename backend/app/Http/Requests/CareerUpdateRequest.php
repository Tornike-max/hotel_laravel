<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CareerUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'location' => 'nullable|string',
            'salary' => 'nullable|numeric',
            'employment_type' => 'nullable|string',
            'experience_level' => 'nullable|string',
            'company_id' => 'nullable|exists:companies,id'
        ];
    }
}
