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
  marked:boolean = false;
  addHero(newHero) {
    if (newHero) {
      this.heroes.push({
        id:this.heroes.length+1,
        name: newHero,
        edit: false,
        marked: false
      });  
      this.show = false;   
    }
    else {
      this.show = true;
    }  
  }
  remove(index){
    this.heroes.splice(index, 1);
  }
  save(obj1,obj2) {     
      this.heroes[obj2].name = obj1;
      this.heroes[obj2].edit = false; 
  }
  editfn(i){  
      this.heroes[i].edit = true;    
  }
  toggleVisibility(event,i){ 
    this.heroes[i].marked= event.target.checked;  
    this.heroes[i].marked = true;
  }
   
}
