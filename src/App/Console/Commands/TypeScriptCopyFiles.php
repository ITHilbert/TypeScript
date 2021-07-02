<?php

namespace ITHilbert\TypeScript\App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Foundation\ComposerScripts;


class TypeScriptCopyFiles extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'typescript:copyfiles';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Kopiert die TypeScript Functionen ins Project';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        //Laravel UI
        $this->info('Dateien werden kopiert');

        //Vue Dateien kopieren
        exec('php artisan vendor:publish --provider="ITHilbert\TypeScript\TypeScriptServiceProvider" --force');

        return 0;
    }
}
