import { Component } from '@angular/core';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent {
  archive_list = [
    ["Fall 2023",'/fall-2023','https://docs.google.com/spreadsheets/d/1hZjYnjJKLxpmugFF4Iqv4V2sXGmYEog7/edit?usp=sharing&ouid=117864566802131404367&rtpof=true&sd=true'],
    ["Spring 2023",'/spring-2023','https://docs.google.com/spreadsheets/d/19mGYLRMcptT6RGKwpeePzRh4uR6l9zD1/edit?usp=sharing&ouid=117864566802131404367&rtpof=true&sd=true']
  ]
}
