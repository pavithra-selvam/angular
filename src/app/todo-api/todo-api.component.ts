import { Component, OnInit } from '@angular/core';
import { freeApiService } from './../services/freeapi.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-todo-api',
  templateUrl: './todo-api.component.html',
  styleUrls: ['./todo-api.component.css']
})
export class TodoAPIComponent implements OnInit {

  constructor(private _freeApiService: freeApiService, private spinnerService: Ng4LoadingSpinnerService) { }
  heroes: any = [];
  id:string;
  title:string;
  completed:boolean;
  show:boolean;
  edit:boolean = false;
  username:string;
  createdDate = new Date();
  obj: any =[];
  template:string;
  ngOnInit() { 
    this.spinnerService.show();   
    this.getTodos();
  }
  remove(obj){
    this.spinnerService.show();
    this._freeApiService.deleteTodo(obj)
    .subscribe(
      data=> 
      { 
        this.getTodos();      
      }      
    );
  }
  addHero(newHero) {
    this.spinnerService.show();
    if (newHero) {
     this.obj = {       
        "title": newHero,
        "completed": false,
        "username": "Pavi",
        "createDate":this.createdDate
      }; 
      this._freeApiService.addTodo(this.obj)
      .subscribe(
        data=> 
        {
          if(data.success==true){
            this.getTodos();
          }          
        }      
      ); 
      this.show = false;   
    }
    else {
      this.show = true;
    }  
  }
  getTodos() {
    this.spinnerService.show();   
    this._freeApiService.getTodo()
    .subscribe(
      data=> 
      {
        this.heroes = data.todos;   
        this.heroes.map(item => {
          item.edit = false;
        });          
      }         
    );
    setTimeout(()=>this.spinnerService.hide(),700) 
  }
  editfn(editId,i){ 
      let j=1;
      for (let newrow of this.heroes) {
        if(newrow.edit==true){
          j = j+1;
        }   
      }
      if(j>1){     
          alert('please complete the already opened todo item');
      }
      else {
        this.heroes[i].edit = true; 
      }
       
  }
  save(newval,id) { 
    this.spinnerService.show();
    this.obj = { 
      "completed": false,
      "_id":id,
      "title": newval,
      "username": "Pavi",
      "createDate":this.createdDate,
      "modifiedAt":this.createdDate,
      "__v":0
    }; 
    this.editTodos(this.obj);
  }
  editTodos(arg){ 
    this._freeApiService.editTodo(arg)
    .subscribe(
      data=> 
      {
        if(data.success==true){
          this.getTodos();
        }          
      }      
    ); 
  }
  toggleVisibility(id,event){ 
    this.obj = { 
      "completed": event.target.checked,
      "_id":id,
      "username": "Pavi",
      "createDate":this.createdDate,
      "modifiedAt":this.createdDate,
      "__v":0
    }; 
    this.editTodos(this.obj);
  }
}
