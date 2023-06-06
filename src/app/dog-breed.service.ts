import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogBreedService {
  host = 'http://localhost:3000';
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private http: HttpClient) { }
  getDogBreed() {
    return this.http.get(`${this.host}/api/dogs`).pipe(map((res) => res));
  }
}
