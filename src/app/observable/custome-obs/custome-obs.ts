import { Component, OnInit } from '@angular/core';
import { resolve } from 'path';
import { EMPTY, Observable } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-custome-obs',
  styleUrl: './custome-obs.css',
  templateUrl: './custome-obs.html',
})
export class CustomeObs implements OnInit {

  ngOnInit(): void {

    let cutsomeObs = new Observable(observer => {
      setTimeout(() => {
        observer.next("HTML")
      }, 1000);

      setTimeout(() => {
        observer.next("CSS")
      }, 2000);

      setTimeout(() => {
        observer.next("JS")
      }, 3000);

      setTimeout(() => {
        observer.next("REACT")
        // observer.complete()
      }, 4000);

      setTimeout(() => {
        observer.next("ANGULAR")
        // observer.error("error occured...")
      }, 5000);

      setTimeout(() => {
        observer.next("RXJS")
      }, 6000);
    })

    cutsomeObs.subscribe((data) => {
      console.log(data);
      this.updateOnUI(data, "customeParent")
    })

    EMPTY.subscribe({
      complete: () => console.log("empty completed....")
    })
  }

  updateOnUI(content: any, ParentId: string,) {
    let child = document.createElement("li")
    child.innerHTML = content

    document.getElementById(ParentId)?.appendChild(child)

  }

}
