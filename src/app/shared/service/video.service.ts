import { ResponsePageable } from './../model/responsePageable.model';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Video } from '../model/video.model';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  apiUrl = 'http://localhost:8080/videos';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  public getVideosWithFlag(flag: string): Observable<ResponsePageable> {
    return this.httpClient.get<ResponsePageable>(this.apiUrl + '?flag=' + flag);
  }

  public postVideos(video: any): Observable<Video> {
    return this.httpClient.post<any>(this.apiUrl, video, this.httpOptions);
  }

}
