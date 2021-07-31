import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { item } from 'src/app/models/item';

import { YoutubeService } from 'src/app/services/youtube.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
items:item[]=[];
filteredItems:any[]=[];
value= new FormControl ();
page:number=1;
pageSize:number=5;
total:number=0;

  constructor(private youtube:YoutubeService) { }

  ngOnInit(): void {
    this.youtube.getAllVideos().subscribe(data=>{
    this.items=data.items;
    this.total=this.items.length;
      console.log(this.items);
      this.filteredItems=this.items
      this.filterVideo(this.items);
    });


    
  }

  filterVideo(items:item[]){
    this.value.valueChanges.pipe(debounceTime(300)).subscribe((value :string)=>{
      if(!value){
        return this.filteredItems=items;
      }
      else{
        
        return  this.filteredItems=items.filter(item=>{
          return (item.snippet.localized.title.toLocaleLowerCase().includes(value))
        })
      }
    })
    
  }
     
  
  

  

}


