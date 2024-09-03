<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCompanyRequest;
use App\Http\Requests\UpdateCompanyRequest;
use App\Http\Resources\CompanyResource;
use App\Models\Company;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $companies = Company::query()->with('user')->latest()->paginate(10);

        if ($companies->isEmpty()) {
            return response()->json([
                'message' => 'No data founded',
                'status' => '404 Not found!',
                'data' => []
            ]);
        }
        return response()->json([
            'message' => 'Data founded successfully',
            'status' => '200 ok',
            'data' => CompanyResource::collection($companies)
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCompanyRequest $request)
    {
        $validatedData = $request->validated();

        if (empty($validatedData)) {
            return response()->json([
                'message' => 'False',
                'status' => '422 Unprocessable Entity',
                'data' => []
            ], 422);
        }

        Company::create($validatedData);

        return response()->json([
            'message' => 'True',
            'status' => '200 OK',
            'data' => []
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $company = Company::query()->with('user')->findOrFail($id);

        if (!isset($company)) {
            return response()->json([
                'message' => "No data founded with this id $id",
                'status' => '404 Not found!',
                'data' => []
            ]);
        }

        return [
            'message' => 'Data founded successfully',
            'status' => '200 ok',
            'data' => new CompanyResource($company)
        ];
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCompanyRequest $request, string $id)
    {
        $validatedData = $request->validated();

        $company = Company::query()->findOrFail($id);

        $updateRes = $company->update($validatedData);

        if ($updateRes) {
            return [
                'message' => 'Data updated successfully',
                'status' => '200 ok',
                'data' => []
            ];
        } else {
            return [
                'message' => 'Failed',
                'status' => '500 server error',
                'data' => []
            ];
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
