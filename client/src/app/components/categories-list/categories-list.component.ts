import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
@Component({
  selector: 'app-categories-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories-list.component.html',
  styleUrl: './categories-list.component.css'
})
export class CategoriesListComponent  {

  constructor(private categoriesService: CategoriesService){}
  ngOnInit() {
    this.categoriesService.getCategories().subscribe(
      res => console.log(res),
      err  => console.error(err)
    )
  }
}
