import { Injectable } from '@angular/core';
import { RvType } from '../classes/rv-type';

@Injectable({
  providedIn: 'root'
})
export class RvListingService {

  constructor() { }

  getRvTypes(): RvType[] {
    let rvTypes = [
      new RvType('classA', 'Class A'),
      new RvType('classB', 'Class B'),
      new RvType('classC', 'Class C'),
      new RvType('toy', 'Toy Hauler'),
      new RvType('fifth', '5th Wheel'),
      new RvType('travel', 'Travel Trailer'),
    ]
    return rvTypes;
  }
}
