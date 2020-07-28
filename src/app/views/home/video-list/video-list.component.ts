import { Video } from './../../../shared/model/video.model';
import { VideoService } from './../../../shared/service/video.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  videosPrevious: Video[];
  livesNext: Video[];

  constructor(public videoService: VideoService) { }

  ngOnInit(): void {
    this.getVideos();
  }

  getVideos() {
    this.videoService.getVideosWithFlag('previous').subscribe(data => {
      this.videosPrevious = data.content;
    });

    this.videoService.getVideosWithFlag('next').subscribe(data => {
      this.videosPrevious = data.content;
    });
  }

}
