import { VideoService } from './../../../shared/service/video.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-video-form-dialog',
  templateUrl: './video-form-dialog.component.html',
  styleUrls: ['./video-form-dialog.component.css']
})
export class VideoFormDialogComponent implements OnInit {

  public videoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private rest: VideoService,
    public dialogRef: MatDialogRef<VideoFormDialogComponent>) { }

  ngOnInit(): void {
    this.videoForm = this.fb.group({
      videoName: ['', [Validators.required]],
      channelName: ['', [Validators.required]],
      videoLink: ['', [Validators.required]],
      videoDate: ['2020-08-01T20:00:00', [Validators.required]],
      videoTime: ['', [Validators.required]]
    });
  }

  createVideo() {
    this.rest.postVideos(this.videoForm.value).subscribe(result => {});
    this.dialogRef.close();
    this.videoForm.reset();
  }

  cancel(): void {
    this.dialogRef.close();
    this.videoForm.reset();
  }

}
