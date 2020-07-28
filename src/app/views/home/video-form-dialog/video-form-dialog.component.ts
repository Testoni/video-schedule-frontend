
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';

import { VideoService } from './../../../shared/service/video.service';

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
    let newDate: moment.Moment = moment.utc(this.videoForm.value.videoDate).local();
    this.videoForm.value.videoDate = newDate.format("YYYY-MM-DD") + "T" + this.videoForm.value.videoTime;

    this.rest.postVideos(this.videoForm.value).subscribe(result => {});
    this.dialogRef.close();
    this.videoForm.reset();
  }

  cancel(): void {
    this.dialogRef.close();
    this.videoForm.reset();
  }

}
