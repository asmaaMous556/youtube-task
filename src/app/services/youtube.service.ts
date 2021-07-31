import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { item } from '../models/item';


@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
   API='https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=25&';
   key='AIzaSyAkK2VxhHtwfFeBEcUhuNT4YJ1V-bze0Fs';
  constructor(private http :HttpClient) { }

  getAllVideos() :Observable<any>{
    return this.http.get(this.API+'key='+this.key);
  }

  getSingleVideo(videoKey : string){
    return this.http.get('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&'+'id='+videoKey+'&key='+this.key);
  }

  rateVideo(id:string,like='like'){
    return this.http;

  }
  
}
