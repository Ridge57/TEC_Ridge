import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../service/categorie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories: any = []
  categoriesFirstSet: any = []
  categoriesSecondSet: any = []
  constructor(private categorieService: CategorieService) {

  }
  ngOnInit(): void {
    this.categories = this.categorieService.getAll().subscribe(data => {

      this.categories = data;
      for (let i = 0; i < 4; i++) {
        this.categoriesFirstSet.push(this.categories[i])
      }
      for (let i = 4; i < this.categories.length; i++) {
        this.categoriesSecondSet.push(this.categories[i])
      }

    })
  }

  buildImgPath(nom: string) {
    return "../../assets/" + nom + ".jpg"
  }

}
