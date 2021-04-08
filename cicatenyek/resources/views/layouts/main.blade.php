<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        @yield('title')

        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="{{ asset('css/bootstrap/bootstrap.min.css') }}">

        <!-- Bootstrap JS -->
        <script src="{{ asset('js/bootstrap/bootstrap.min.js') }}"></script>

        <!-- JQuery -->
        <script src="{{ asset('js/jquery/jquery.min.js') }}"></script>

        <script>
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });
        </script>

    </head>
    <body>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="/"></a>
                <div class="collapse navbar-collapse" id="main_navbar">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Főoldal</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/saves">Mentett tények</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        @yield('content')

    </body>
</html>
