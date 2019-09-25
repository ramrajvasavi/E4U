import { Component } from '@angular/core';
import { CategoryService } from '../shared/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private route: Router) { }

  ngOnInit() {}
  navigateToTabs(){
    this.route.navigate(['tabs/category']);
  }
}
