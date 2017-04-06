import { Component } from '@angular/core';
import { DependencyService } from './dependency.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  persons = [];
  sums = 0;
  constructor(public dependencyService: DependencyService) {

  }
  ngOnInit() {
    this.persons = this.dependencyService.persons();
    this.sums = this.dependencyService.sum();
  }
}