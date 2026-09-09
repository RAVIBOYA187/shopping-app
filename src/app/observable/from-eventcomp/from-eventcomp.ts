import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-from-eventcomp',
  styleUrl: './from-eventcomp.css',
  templateUrl: './from-eventcomp.html',
})
export class FromEventcomp implements OnInit, AfterViewInit {

  @ViewChild('targetBtn') btn!: ElementRef;

  constructor() {

  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    let count = 1;

    fromEvent(this.btn.nativeElement, "click").subscribe((res) => {
      // console.log(res);
      // console.log("from event working ... ");
      // console.log(" child ", count++);
      this.addToParent(" child => " + count++)
    })
  }

  addToParent(val: any) {

    let parent = document.getElementById("parent");
    let child = document.createElement("li")
    child.innerHTML = val;

    parent?.appendChild(child)
  }

}
