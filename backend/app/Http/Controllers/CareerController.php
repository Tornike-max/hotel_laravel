<?php

namespace App\Http\Controllers;

use App\Http\Requests\CareerRequest;
use App\Http\Requests\CareerUpdateRequest;
use App\Http\Resources\CareerResource;
use App\Models\Career;


class CareerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $search = request('searchVal', '');
        $selectVal = request('selectVal', '');
        $filterVal = request('filterVal', '');
        $filterByLocation = request('filterByLocation', '');
        $filterByEmpType = request('filterByEmpType', '');
        $salaryRange = request('salaryRange', []);


        $query = Career::with(['company', 'category', 'skills', 'companies'])->orderBy('id', 'desc');

        if ($search !== '') {
            $query->where('title', 'like', '%' . $search . '%');
        }

        if (!empty($selectVal)) {
            $query->whereHas('category', function ($q) use ($selectVal) {
                $q->where('name', 'like', '%' . $selectVal . '%');
            });
        }

        if ($filterVal !== '') {
            $query->where('experience_level', 'like', '%' . $filterVal . '%');
        }

        if ($filterByLocation !== '') {
            $query->where('location', '=', $filterByLocation);
        }

        if ($filterByEmpType !== '') {
            $query->where('employment_type', '=', $filterByEmpType);
        }

        if (!empty($salaryRange)) {
            $query->whereBetween('salary', $salaryRange);
        }

        $careers = $query->paginate(10);

        if ($careers->isEmpty()) {
            $response = [
                'message' => 'Data not found',
                'status' => '404 Not found',
                'data' => []
            ];
            return response()->json($response);
        }


        return response()->json([
            'data' => $careers,
            'message' => 'Success',
            'status' => '200 OK'
        ]);
    }

    public function show(string $id)
    {
        $career = Career::query()->with(['company', 'category', 'skills'])->findOrFail($id);


        if (empty($career)) {
            $response = [
                'message' => 'Data not found',
                'status' => '404 Not found',
                'data' => []
            ];
            return $response;
        }

        $response = [
            'message' => 'True',
            'status' => '200 ok',
            'data' => $career
        ];

        return $response;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CareerRequest $request)
    {
        $validatedData = $request->validated();

        if (empty($validatedData)) {
            return response()->json([
                'message' => 'False',
                'status' => '422 Unprocessable Entity',
                'data' => []
            ], 422);
        }
        $validatedData['company_id'] = 1;
        $validatedData['category_id'] = 2;

        $career = Career::create($validatedData);

        return response()->json([
            'message' => 'True',
            'status' => '200 OK',
            'data' => new CareerResource($career)
        ], 200);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(CareerUpdateRequest $request, string $id)
    {

        $validatedData = $request->validated();
        $career = Career::query()->findOrFail($id);

        if (empty($validatedData)) {
            return response()->json([
                'message' => 'No data provided for update',
                'status' => '422 Unprocessable Entity',
                'data' => []
            ], 422);
        }

        $updateResult = $career->update($validatedData);

        if (!$updateResult) {
            return response()->json([
                'message' => 'Update failed',
                'status' => '400 Bad Request',
                'data' => []
            ], 400);
        } else {
            return response()->json([
                'message' => 'Update successful',
                'status' => '200 OK',
                'data' => $career
            ], 200);
        }
    }



    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $career = Career::query()->findOrFail($id);
        if (!isset($career)) {
            return response()->json([
                'message' => 'Target data not founded',
                'status' => '404 Not found',
                'data' => []
            ], 404);
        }

        $career->delete();
        return response()->json([
            'message' => 'Target deleted',
            'status' => '200 ok',
            'data' => []
        ], 200);
    }
}
