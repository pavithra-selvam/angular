import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  heroes = [];
  errorMessage = '';
  hidval = '';
  show:boolean;
  edit:boolean = false;
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
      this.show = false;
    }
    else {
      this.show = true;
    }  
  }
  remove(index){
    this.heroes.splice(index, 1);
  }
  save(hidval: string) {     
      this.edit = false;
  }
  editfn(){
    this.edit = true;
  }
   
}
