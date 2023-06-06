import { Component } from '@angular/core';
import { DogBreedService } from './dog-breed.service';

interface DogBreed {
  good_with_other_dogs: number;
  name: string;
  image_link: string;
  expanded: boolean,
  good_with_children: number,
  shedding: number,
  grooming: number,
  trainability: number
}

@Component({
  selector: 'app-root',
  templateUrl: './dog-breed.component.html',
  styleUrls: ['./dog-breed.component.css']
})
  
export class DogBreedComponent {
  title = 'dog-breed-ui';
  dogBreeds: DogBreed[];
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(
    private dogBreedService: DogBreedService,
  ) {
    this.dogBreeds = [];
  }

/**
 * Making Service call to get the dog breed list on init
 */
  ngOnInit() {
    this.dogBreedService.getDogBreed().subscribe((data) => {
      this.dogBreeds = data as DogBreed[];
    });
  }
/**
 * This method will update expand flag to allow UI to show details of dog breed
 * @param listIndex 
 */
  expandOrCollapseRow(listIndex: number): void {
    const dogObj = this.dogBreeds[listIndex];

    // reset (collapses all objects in the array)
    this.dogBreeds = this.dogBreeds.map(rowObj => ({
      ...rowObj,
      expanded: false
    }));

    // expands only the dogObj clicked
    this.dogBreeds[listIndex] = {
      ...dogObj,
      expanded: !dogObj.expanded
    }
  }
}
