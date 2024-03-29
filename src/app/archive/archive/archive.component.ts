import { Component } from '@angular/core';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent {
  archive_list = [
    ["Spring 2024",'/spring-2024','https://docs.google.com/spreadsheets/d/14xZe5BYsE1dwG5Yy17Dpsk-_3S2Z_BIE/edit?usp=drive_link&ouid=117864566802131404367&rtpof=true&sd=true'],
    ["Fall 2023",'/fall-2023','https://docs.google.com/spreadsheets/d/1hZjYnjJKLxpmugFF4Iqv4V2sXGmYEog7/edit?usp=sharing&ouid=117864566802131404367&rtpof=true&sd=true'],
    ["Fall 2024",'/fall-2024','https://docs.google.com/spreadsheets/d/1MSukpV1LZGVixyT9ooc7Hpoy2Bbm6GRJlz8GmG63Hy0/edit?usp=sharing'],
    ["Spring 2023",'/spring-2023','https://docs.google.com/spreadsheets/d/19mGYLRMcptT6RGKwpeePzRh4uR6l9zD1/edit?usp=sharing&ouid=117864566802131404367&rtpof=true&sd=true']
  ]
}
