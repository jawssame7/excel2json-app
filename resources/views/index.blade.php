<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" data-theme="dark">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>excel2json</title>

    {{-- react に変更があったとき自動で --}}
    @viteReactRefresh
    @vite(['resources/sass/app.scss', 'resources/react/src/main.tsx'])

</head>

<body class="antialiased">
<div id="app"></div>
</body>
</html>
