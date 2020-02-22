@extends('_layouts.master')

@push('meta')
    <meta property="og:title" content="About {{ $page->siteName }}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="{{ $page->getUrl() }}"/>
    <meta property="og:description" content="A little bit about {{ $page->siteName }}" />
@endpush

@section('body')
    <h1>About</h1>

    <p class="mb-6">Hi. I'm Matt Robitaille. I'm the Development Manager at <a href="//www.anchour.com" title="Anchour" target="_blank">Anchour</a>.</p>

    <p class="mb-6">
        This site is fresh. I'm not 100% sure what it's going to consist of yet. I'll hopefully update it regularly.
    </p>
@endsection
