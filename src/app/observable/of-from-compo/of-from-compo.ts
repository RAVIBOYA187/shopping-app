import { Component, OnInit, signal } from '@angular/core';
import { resolve } from 'node:path';
import { from, of, take, toArray } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-of-from-compo',
  styleUrl: './of-from-compo.css',
  templateUrl: './of-from-compo.html',
})
export class OfFromCompo implements OnInit {

  ofmsg: string[] = []
  ofobject = signal({})

  constructor() {

  }
  ngOnInit(): void {

    let ob1 = of("virat", "msd", "rohit", "raina", "yuvraj", "sehvag")
    ob1.subscribe((data) => {
      console.log(data);
      this.updateOnUI("of data : " + data, "parent3")
    })


    let ob2 = of({ a: "virat", b: "msd", c: "bumrah" }, { d: "buvi", e: 'shami', f: "sachin" }, [100, 200, 300]);
    ob2.subscribe((emit) => {
      // console.log(emit);
      this.ofmsg = Object.keys(emit)
      this.ofobject.set(emit)
      // console.log(this.ofobject());

    });

    // from ARRRAY to Observable
    console.log("=========================");
    let ob3 = from(["bumrah", "bhuvi", "srishanth", { a: "virat", b: "msd" }]);
    ob3.subscribe((val) => {
      console.log("from array to Observable => ", val);
      this.updateOnUI(val, "parentArray")
    })


    console.log("=========================");

    // from Promise to Observable
    let promise = new Promise(resolve => {

      setTimeout(() => {
        resolve("promise resolved machaaa....")
      }, 1000);
    })

    // let ob4 = of(promise);
    let ob4 = from(promise);

    ob4.subscribe((pr) => {
      console.log("from Promise to Observable => ", pr);
      this.updateOnUI(pr, "parentPromise")
    })


    //from String to Observable

    let ob5 = from("virat kohli msd");
    // let ob5 = of("virat kohli msd");

    ob5.subscribe(st => {
      console.log("from String to Observable => ", st);
      this.updateOnUI(st, "parentString")
    })

    let ob6 = from("bumrah sehvag malinga");
    ob6.pipe(
      take(10),
      toArray()
    )
      .subscribe(p => {
        console.log(p);
      })

  }

  updateOnUI(content: any, ElementId: string) {
    let child = document.createElement("li")
    child.innerHTML = content

    document.getElementById(ElementId)?.appendChild(child)

  }



}
