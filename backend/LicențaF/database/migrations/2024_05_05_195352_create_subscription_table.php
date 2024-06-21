<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubscriptionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('subscriptions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_plan');
            $table->unsignedBigInteger('user_id');
            $table->date('start_date');
            $table->date('end_date');
            $table->tinyInteger('status')->default(0);
            $table->foreign('id_plan')->references('id')->on('plans')->cascadeOnDelete();;
            $table->foreign('user_id')->references('id')->on('users')->cascadeOnDelete();;
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('subscriptions', function (Blueprint $table) {
            $table->dropForeign(['id_plan']);
        });
        Schema::table('subscriptions', function (Blueprint $table) {
        $table->dropForeign(['user_id']);
    });
        Schema::dropIfExists('subscriptions');
    }
}
