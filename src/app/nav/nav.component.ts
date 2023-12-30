import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
    @Output() categorie : EventEmitter<string> = new EventEmitter<string>();
    
    public setCategorie(categorie:string):void{
        this.categorie.emit(categorie);
    }
  }
