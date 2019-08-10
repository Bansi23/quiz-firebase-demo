import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  going() {
    return [
      { "id": 1, "name": "Palanpur(200)", "Price": 200 },
      { "id": 2, "name": "Rajkot(400)", "Price": 400 },
      { "id": 3, "name": "Amareli(350)", "Price": 350 },
      { "id": 4, "name": "Jafarabaad(600)", "Price": 600 },
      { "id": 5, "name": "Chotila(800)", "Price": 800 },
      { "id": 6, "name": "Bhuj(1000)", "Price": 1000 },
      { "id": 7, "name": "Kuchh(1500)", "Price": 1500 },
      { "id": 8, "name": "Atkot(800)", "Price": 800 },
      { "id": 9, "name": "Jasadan(450)", "Price": 450 },
      { "id": 10, "name": "Gondal(850)", "Price": 850 },
      { "id": 11, "name": "Saputara(1800)", "Price": 1800 },
      { "id": 12, "name": "Surat(300)", "Price": 300 },
      { "id": 13, "name": "Gandhinagar(100)", "Price": 100 },
      { "id": 14, "name": "Vadiya(600)", "Price": 600 },
      { "id": 15, "name": "Babra(800)", "Price": 800 },
      { "id": 16, "name": "Unna(1000)", "Price": 1000 },
    ]
  }

  getSeatsCol1() {
    const finalArray = [];
    for (let i = 0; i < 40; i++) {
      finalArray.push({ id: i + 1, text: i + 1 });
    };
    return finalArray;
  }
  constructor() { }
}
