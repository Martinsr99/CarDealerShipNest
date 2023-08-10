import { Injectable, NotFoundException } from "@nestjs/common";
import { Car } from "./interfaces/car.interface";
import {v4 as uuid} from 'uuid'
import { CreateCarDTO } from "./dto/create-car.dto";
@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: "Toyota",
      model: "Corolla",
    },
    {
      id: uuid(),
      brand: "Honda",
      model: "Civic",
    },
    {
      id: uuid(),
      brand: "Jeep",
      model: "Cherokee",
    },
  ];

  findAll() {
    return this.cars;
  }

  findCarById(id: string) {
    const car = this.cars.find(car => car.id === id);

    if (!car) throw new NotFoundException();

    return car
  }

  create( {model,brand}: CreateCarDTO){
    const car : Car = {
      id: uuid(),
      brand,
      model
    }

    this.cars.push(car);

    return car
  }

}
