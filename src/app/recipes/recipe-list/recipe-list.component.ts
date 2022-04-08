import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('the name','the description',
    'https://images.unsplash.com/photo-1629740001727-f9ad15f720c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVsaWNpb3VzJTIwcGl6emF8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60'),
   

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
