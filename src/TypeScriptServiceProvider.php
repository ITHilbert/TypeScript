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

      //Ressources ts
      $this->publishes([
        __DIR__.'/Ressources/ts' => resource_path('ts/vendor/typescript'),
        __DIR__.'/Ressources/js' => resource_path('js/vendor/typescript'),
      ]);

      //TypeScripts kopieren nach Public
      $this->publishes([
        resource_path('js/vendor/typescript') => public_path('vendor/typescript'),
      ]);





      //Commands Registrieren
      $this->commands( \ITHilbert\TypeScript\App\Console\Commands\TypeScriptCopyFiles::class );
    }
}
