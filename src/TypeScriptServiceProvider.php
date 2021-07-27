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
      //TypeScripts kopieren nach Public
      $this->publishes([
          __DIR__ .'/assets' => public_path('vendor/typescript'),
      ]);



      //Ressources ts
      $this->publishes([
          __DIR__.'/Ressources/ts' => resource_path('ts/vendor/typescript'),
      ]);


      //Commands Registrieren
      $this->commands( \ITHilbert\TypeScript\App\Console\Commands\TypeScriptCopyFiles::class );
    }
}
