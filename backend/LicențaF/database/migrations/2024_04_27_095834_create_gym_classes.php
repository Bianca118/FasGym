<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGymClasses extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('gymclasses', function (Blueprint $table) {
            $table->string('name');
            $table->unsignedBigInteger('id_trainer');
            $table->timestamp('date');
            $table->integer('seats');
            $table->timestamps();

            $table->foreign('id_trainer')->references('id')->on('trainers')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('gymclasses', function (Blueprint $table) {
            $table->dropForeign(['id_trainer']);
        });
        Schema::dropIfExists('gymclasses');
    }
}
