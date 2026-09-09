// // import { Component, OnInit } from '@angular/core';
// // import { Store, select } from '@ngrx/store';
// // import { decrement, increment, reset } from '../counter.actions';
// // import { selectCount } from '../counter.selectors';

// // @Component({
// //   imports: [],
// //   selector: 'app-counter',
// //   styleUrl: './counter.css',
// //   templateUrl: './counter.html',
// // })
// // export class Counter implements OnInit {

// //   val !: number

// //   constructor(private store: Store<{ counter: { count: number } }>) {

// //   }

// //   inc() {

// //     this.store.dispatch(increment())
// //   }

// //   dec() {
// //     this.store.dispatch(decrement())
// //   }

// //   res() {
// //     this.store.dispatch(reset())
// //   }

// //   ngOnInit(): void {
// //     this.store.select(selectCount).subscribe(data => {
// //       console.log("subs => ", data);
// //       this.val = data.count
// //     })
// //   }


// // }


// import { Component } from '@angular/core';
// import { Store } from '@ngrx/store';

// import { decrement, increment, reset } from '../counter.actions';
// import { selectCount } from '../counter.selectors';

// @Component({
//   selector: 'app-counter',
//   imports: [],
//   templateUrl: './counter.html',
//   styleUrl: './counter.css',
// })
// export class Counter {

//   val!: number;

//   constructor(
//     private store: Store
//   ) { }

//   inc(): void {
//     this.store.dispatch(increment());
//   }

//   dec(): void {
//     this.store.dispatch(decrement());
//   }

//   res(): void {
//     this.store.dispatch(reset());
//   }

//   ngOnInit(): void {
//     this.store.select(selectCount).subscribe(count => {
//       console.log('count =>', count);
//       this.val = count;
//     });
//   }
// }



import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { decrement, increment, reset } from '../counter.actions';
import { selectCount } from '../counter.selectors';
import { CounterState } from '../counter.state';
import { materialize, of, throwError } from 'rxjs';
import { error } from 'console';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter implements OnInit {

  val?: any;

  // st = inject(Store<CounterState>)
  constructor(private store: Store<CounterState>) { }

  // val$ = this.store.select(selectCount);
  // val$ = this.st.select(selectCount);


  ngOnInit(): void {

    this.store.select(selectCount).subscribe(data => {
      this.val = data.count;
    })

    console.log("=====================");

    of(7, 18, 45).pipe(
      materialize()
    ).subscribe(d => {
      console.log(d);
      // console.log(d.observe);
      // console.log(d.value);

    });

    console.log("=====================");

    throwError(() => new Error("materialize  error"))
      .pipe(
        materialize()
      ).subscribe(v => {
        console.log(v);
        // return
      })

  }


  inc(): void {
    console.log(this.val);
    this.store.dispatch(increment());
  }

  dec(): void {
    this.store.dispatch(decrement());
  }

  res(): void {
    this.store.dispatch(reset());
  }





}