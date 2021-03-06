
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { YoutubeService } from 'src/app/services/youtube.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SaveVideoService } from 'src/app/services/save-video.service';
import { Subscription } from 'rxjs';
import {parse,toSeconds} from 'iso8601-duration';
import {faStar}  from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  id: string = '';
  VideoUrl: string = 'https://www.youtube.com/embed/';
  safeUrl: SafeResourceUrl = '';
  video: any;
  duration:any;
  paramsSubscripe: Subscription = new Subscription;
  videoDetailsSub: Subscription = new Subscription;
  faStar=faStar;
  checked:boolean=false;
  currentRate!:number;



  constructor(private route: ActivatedRoute,
    private youtubeService: YoutubeService, private _sanitizer: DomSanitizer, private savevideo: SaveVideoService) { }
  ngOnDestroy(): void {
    this.paramsSubscripe.unsubscribe();
    this.videoDetailsSub.unsubscribe();

  }

  ngOnInit(): void {

    this.paramsSubscripe = this.route.params.subscribe(params => {
      this.id = params.id;
      this.VideoUrl = this.VideoUrl + this.id;
      this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(this.VideoUrl),


      this.videoDetailsSub = this.youtubeService.getSingleVideo(this.id).subscribe((data: any) => {
        this.video = data.items
        this.duration= (toSeconds(parse(this.video[0].contentDetails.duration)));
      },error=>{
       console.log(error)
      })
    },error=>{console.log(error)});

  }

  saveVideo(id: string) {
    this.savevideo.saveVideoToFvList(id);
  }

 getRate(rate:any){
  console.log(rate);
  var rate =(rate).toString as any
  localStorage.setItem('rate',rate);
 }
}
