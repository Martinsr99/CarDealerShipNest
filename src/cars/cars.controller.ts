import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    constructor(private readonly carsService:CarsService){

    }

    @Get()
    getAllcars() {
        return this.carsService.findAll()
    }

    @Get(':id')
    getCarById(@Param('id') id:string) {
        return this.carsService.findCarById(id)
    }

    @Post()
    createCar(@Body() body:any){
        return body
    }

    @Patch(':id')
    updateCar(@Param('id', ParseIntPipe) id:number, @Body() body:any){
        return body
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseIntPipe) id:number){
        return {
            method:'Delete',
            id
        }
    }

}
