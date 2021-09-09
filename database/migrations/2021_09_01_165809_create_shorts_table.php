<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateShortsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shorts', function (Blueprint $table) {
            $table->integer('pid')->unsigned()->primary();
            $table->string('pname',100);
            $table->string('pimg');
            $table->string('psizes',60);
            $table->float('pprice');
            $table->integer('pstock')->unsigned();
            $table->text('colors');
            $table->string('fabric',60);
            $table->text('images');
            $table->string('bid',50)->nullable();
            $table->text('sizes');
            $table->smallInteger('stock_s')->unsigned();
            $table->smallInteger('stock_m')->unsigned();
            $table->smallInteger('stock_l')->unsigned();
            $table->smallInteger('stock_xl')->unsigned();
            $table->smallInteger('stock_2xl')->unsigned();
            $table->smallInteger('stock_3xl')->unsigned();
            $table->smallInteger('stock_4xl')->unsigned();
            $table->smallInteger('stock_5xl')->unsigned();
            $table->string('description',7000);
            $table->string('modal_id',120);
            $table->string('label_id',120);
            $table->string('control',120);
            $table->string('control_link',120);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('shorts');
    }
}
