import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounce, debounceTime, distinctUntilChanged, EMPTY, filter, first, from, fromEvent, interval, of, skipWhile, take, throttleTime, toArray } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-to-array',
  styleUrl: './to-array.css',
  templateUrl: './to-array.html',
})
export class ToArray implements OnInit, AfterViewInit {





  ngOnInit(): void {

    let ob7 = interval(500);
    ob7.pipe(
      take(7),
      toArray()
    ).subscribe(val => {
      // console.log("interval to  Observable using toArray => ", val);
      this.updateOnUI(val, "parentArray1")

    })

    // let ob8 = from("");
    // ob8.pipe(
    //   // take(1),
    //   first()
    // ).subscribe(t => {
    //   // console.log("string to Observalbe using toArray => ", t);
    //   this.updateOnUI(t, "parentArray2")
    // })

    // of(1, 3, 5).pipe(
    //   filter(x => x % 2 === 0)
    // ).subscribe({
    //   next: (v) => console.log(v),
    //   complete: () => {
    //     console.log("completedd...");
    //   };

    // of(1, 2, 3, 8, 4, 2, 10, 1, 222, 5555)
    //   .pipe(
    //     skipWhile(x => x < 5)
    //   )
    //   .subscribe(x => console.log(x));


    of(null).subscribe({
      next: (v) => console.log(v),
      complete: () => console.log("completed")
    })

    EMPTY.subscribe(
      {
        next: (v) => console.log(v),
        complete: () => console.log("EMpty completed")
      }
    )


  }


  updateOnUI(content: any, ElementId: string) {
    let child = document.createElement("li")
    child.innerHTML = content

    document.getElementById(ElementId)?.appendChild(child)

  }


  @ViewChild('myInput') myInput !: ElementRef;

  ngAfterViewInit(): void {

    fromEvent<InputEvent>(this.myInput?.nativeElement, 'input').pipe(
      // debounceTime(1000)
      // throttleTime(1000)
      // distinctUntilChanged((a, b) => a !== b)
      take(5)
    )
      .subscribe((event) => {

        // console.log('hiii');

        const input = event.target as HTMLInputElement;
        console.log(input.value);

      });

  }



}
