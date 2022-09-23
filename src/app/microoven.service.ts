import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//access microoven.ts
import { Microoven } from './microoven';
@Injectable({
  providedIn: 'root'
})
export class MicroovenService {

  constructor() { }
  micro: Microoven[] = [
    {
      "pid":1,
      "pname":"Lipstick",
      "pdescription":"Retro mat lipstick",
      "price":1750,
      "img":"https://images.unsplash.com/photo-1600852306771-c963331af110?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGxpcHN0aWNrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
  },
  {
      "pid":2,
      "pname":"Blush",
      "pdescription":"Strawberry Powder blush",
      "price":750,
      "img":"https://images.unsplash.com/photo-1502741338009-cac2772e18bc?ixlib=rb-1.2.1&dpr=2&auto=format&fit=crop&w=200&q=60&crop=entropy"
  },
  {
      "pid":3,
      "pname":"Sun Screen",
      "pdescription":"White Glow sun screen",
      "price":750,
      "img":"https://images.unsplash.com/photo-1594332322527-08753d4473c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHN1biUyMHNjcmVlbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
  },
  {
      "pid":4,
      "pname":"Eye Shadow",
      "pdescription":"Shimmer MAC Eye shadow",
      "price":2750,
      "img":"https://images.unsplash.com/photo-1512207426415-91c2e14fbe36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGV5ZSUyMHNoYWRvd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
  },
  {
      "pid":5,
      "pname":"Nail Paint",
      "pdescription":"Multi color MAC Nail Paint",
      "price":750,
      "img":"https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmFpbCUyMHBhaW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
  },
  {
      "pid":6,
      "pname":"Compact",
      "pdescription":"New York fix powder",
      "price":1750,
      "img":"https://images.unsplash.com/photo-1512495967160-4e815a64fba6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcGFjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
  }
  ];

  public getMicroOvenDetails(): any {
    const microObservable = new Observable(observe => {
      setTimeout(() => {
        observe.next(this.micro);
      }, 1000);
    });
    return microObservable;
  }
}
