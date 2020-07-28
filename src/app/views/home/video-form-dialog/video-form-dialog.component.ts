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
    public dialogRef: MatDialogRef<VideoFormDialogComponent>) { }

  ngOnInit(): void {
    this.videoForm = this.fb.group({
      videoName: ['', [Validators.required]],
      channelName: ['', [Validators.required]],
      videoLink: ['', [Validators.required]],
      videoDate: ['', [Validators.required]],
      videoTime: ['', [Validators.required]]
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
