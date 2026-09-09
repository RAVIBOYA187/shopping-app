import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { interval, Subscription, timer, } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-interval-comp',
  styleUrl: './interval-comp.css',
  templateUrl: './interval-comp.html',
})
export class IntervalComp implements OnInit, OnDestroy {

  sub !: Subscription;
  intmsg = signal<number>(0);

  constructor() {

  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');

    // let temp = interval(500)
    // this.sub = temp.subscribe((res) => {
    //   console.log(res);
    //   this.updateOnUI(" value => " + res, "parent", res)
    //   this.intmsg.set(res)
    // if (res > 2) { this.sub.unsubscribe() }
    // })

    let ans = timer(3000, 1000);
    this.sub = ans.subscribe((result) => {
      console.log("timer result : ", result);
      this.updateOnUI("timer result : " + result, "parent2", ans)

      if (result > 5) {
        this.sub.unsubscribe()
      }
    })

  }

  updateOnUI(content: any, ElementId: string, val: any) {
    let child = document.createElement("li")
    child.innerHTML = content

    document.getElementById(ElementId)?.appendChild(child)
    // if (val > 5) {
    //   this.sub.unsubscribe()
    // }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }




}
