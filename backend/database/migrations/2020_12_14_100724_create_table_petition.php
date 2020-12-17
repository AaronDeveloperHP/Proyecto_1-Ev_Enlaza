<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTablePetition extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('petitions', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('action');
            $table->text('description');
            $table->string('state');
            $table->string('origin');
            $table->string('start_date');
            $table->string('end_date');
            $table->timestamps();

            $table->foreign('origin')->references('email')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('petitions');
    }
}
