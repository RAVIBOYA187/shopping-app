import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  imports: [RouterLink, RouterOutlet],
  selector: 'app-observable-comp',
  styleUrl: './observable-comp.css',
  templateUrl: './observable-comp.html',
})
export class ObservableComp { }
