<?php

namespace ITHilbert\TypeScript;

use Illuminate\Support\ServiceProvider;

class TypeScriptServiceProvider extends ServiceProvider
{

    /**
     * Boot the application events.
     *
     * @return void
     */
    public function boot()
    {
        //Vue Compontents kopieren nach Public
        $this->publishes([
            __DIR__ .'/assets' => public_path('vendor/typescript'),
        ]);

        //Ressources js und sass
        $this->publishes([
            __DIR__.'/ts' => resource_path('ts'),
        ]);


        //Commands Registrieren
        $this->commands( \ITHilbert\TypeScript\App\Console\Commands\TypeScriptCopyFiles::class );
    }
}
