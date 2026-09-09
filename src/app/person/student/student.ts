import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  imports: [],
  selector: 'app-student',
  styleUrl: './student.css',
  templateUrl: './student.html',
})
export class Student {

  details: any = {}
  constructor(private store: Store<any>) {

    this.store.select("personDetails").subscribe((data) => {

      this.details = data;
      console.log(data);
    })
  }
}
