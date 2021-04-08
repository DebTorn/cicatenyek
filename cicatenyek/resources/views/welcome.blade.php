@extends('layouts.main')

@section('title')
    <title>Főoldal</title>
@endsection

@section('content')
    <div class="container">

        <h3 class="text-center mt-4">Cicás tények</h3>
        <hr>
        @for($i = 0; $i < 3; $i++)
            <div class="row d-felx justify-content-center mt-5">
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <p id="cat_fact_{{ $i }}"></p>
                            <small>Tetszik ez a tény a macskákról?</small>
                            <button type="button" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#save_modal" id="fact_yes_{{ $i }}">Igen</button>
                            <button type="button" class="btn btn-outline-danger" id="fact_nope_{{ $i }}">Nem</button>
                        </div>
                    </div>
                </div>
            </div>
        @endfor
    </div>

    <div class="modal fade" id="save_modal" tabindex="-1" aria-labelledby="save_modal_label" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body">
                    <h5 class="modal-title text-center mb-3" id="save_modal_label">Szeretné elmenteni ezt a tényt?</h5>
                    <div class="container">
                        <div class="row d-flex justify-content-center">
                            <div class="col-sm-6">
                                <form method="POST" id="fact_save_form">
                                    @csrf
                                    <input type="hidden" name="fact_id" id="fact_id" required>
                                    <input type="submit" value="Mentés" class="btn btn-success">
                                </form>
                            </div>
                            <div class="col-sm-6">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Bezárás</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="{{ asset('js/cicapi.js') }}"></script>
@endsection