import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { Video } from './../../../shared/model/video.model';
import { VideoService } from './../../../shared/service/video.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  videosPrevious: Video[];
  videosNext: Video[];

  constructor(public videoService: VideoService, public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getVideos();
  }

  getVideos() {
    this.videoService.getVideosWithFlag('previous').subscribe(data => {
      this.videosPrevious = data.content;
      this.videosPrevious.forEach(video => {
        video.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(video.videoLink);
      });
    });

    this.videoService.getVideosWithFlag('next').subscribe(data => {
      this.videosNext = data.content;
      this.videosNext.forEach(video => {
        video.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(video.videoLink);
      });
    });
  }

}
