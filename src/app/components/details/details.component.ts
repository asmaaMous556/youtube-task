import { Route } from '@angular/compiler/src/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { YoutubeService } from 'src/app/services/youtube.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { video } from 'src/app/models/video';
import { SaveVideoService } from 'src/app/services/save-video.service';
import { Observable, observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit , OnDestroy{
id:string='';
VideoUrl:string='https://www.youtube.com/embed/';
safeUrl:SafeResourceUrl='';
video:any;
  paramsSubscripe: any;
  

  constructor(private route: ActivatedRoute,
    private youtubeService:YoutubeService, private _sanitizer: DomSanitizer, private savevideo : SaveVideoService) { }
  ngOnDestroy(): void {
    this.paramsSubscripe.unsubscripe();
   
  }

  ngOnInit(): void {
this.paramsSubscripe= this.route.params.subscribe(params=>{
   this.id=params.id;
   this.VideoUrl=this.VideoUrl+this.id;
   this.safeUrl=this._sanitizer.bypassSecurityTrustResourceUrl(this.VideoUrl)
   
 this.youtubeService.getSingleVideo(this.id).subscribe((data: any)=>{
   this.video=data.items
   console.log(this.video)
 })
 })
  }

  saveVideo(id:string){
    this.savevideo.saveVideoToFvList(id);
  }

}
