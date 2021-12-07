import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/models/Category';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  categories: Category[];
  message: string = null;
  constructor(private service: CategoryService) { }

  ngOnInit() {
    this.service.getAllCategory().subscribe(
      (data)=> { 
        console.log(data)
       this.categories=data
       console.log(this.categories)
      this.message=null
    },
      (errorRespnse)=>{
        console.log(errorRespnse)
      }
    )
  }
  }


