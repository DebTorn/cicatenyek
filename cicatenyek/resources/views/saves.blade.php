@extends('layouts.main')

@section('title')
    <title>Mentett tények</title>
@endsection

@section('content')
    <div class="container text-center">
        <div class="row">
            <div class="col-sm-12">
                <div class="table-responsive">
                    <table class="table table-striped table-light mt-5" id="saves_table">
                        <thead>
                            <tr>
                                <th>Tény</th>
                                <th>Mentés dátuma</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="fact_loader">
                                <td colspan="2">
                                    <div class="spinner-grow" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <script src="{{ asset('js/table.js') }}"></script>

@endsection