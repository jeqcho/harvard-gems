import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fall2025',
  templateUrl: './fall2025.component.html',
  styleUrls: ['./fall2025.component.scss']
})
export class Fall2025Component implements OnInit {
  dropDownList: any;
  super_gems: any;
  great_courses: any;
  department_list: any;
  hidden_gems: any;
  full_department_list: any;
  special_list = [
    "General Education",
    "First Year Seminar Program",
    'Expository Writing',
  ]
  partial_department_list: any;
  selected_great_courses: any;
  selected_super_gems: any;
  selected_hidden_gems: any;
  expos: any;
  department_gems: Record<string, any> = {}
  BigString = String
  term_code ="2258"// get this 4-digit by going to my.harvard and use the advanced search
  term = "(Term%3A%5C%22" + this.term_code + "%5C%22)"
  url_prefix = 'https://portal.my.harvard.edu/psp/hrvihprd/EMPLOYEE/EMPL/h/?tab=HU_CLASS_SEARCH&SearchReqJSON=%7B%22SearchText%22%3A%22'
  url_suffix = '%22%7D';

  constructor(private http: HttpClient) { }

  getDataHttp(url: string) {
    return this.http.get(url);
  }

  ngOnInit() {
    // Load main data files
    this.http.get('/assets/data/spring2025/super_gems.json').subscribe(data => {
      this.super_gems = data;
      this.selected_super_gems = this.super_gems.filter((x: any) => [
        'EMR 1010',
        "HEB 123",
        "PSY 1813",
        "GENED 1025",
        "OEB 104",
      ].includes(x.course_code));
    });

    this.http.get('/assets/data/spring2025/great_courses.json').subscribe(data => {
      this.great_courses = data;
      this.selected_great_courses = this.great_courses.filter((x: any) => [
        "AFRAMER 133Y",
        "GOV 1796",
        "ECON 2725",
        "RELIGION 32",
        "EXPOS 40"
      ].includes(x.course_code));
    });

    this.http.get('/assets/data/spring2025/department_list.json').subscribe(data => {
      this.department_list = data;
      this.full_department_list = data;
      this.partial_department_list = data;
      for (let spec_department of this.special_list) {
        this.partial_department_list = this.partial_department_list.filter((x: string) => x !== spec_department);
      }
      this.special_list = this.special_list.filter((x: string) => x !== 'Expository Writing');
      for (let department of this.department_list) {
        this.getDataHttp(`assets/data/fall2025/departments/${department}.json`).subscribe(
          (data: any) => {
            this.department_gems[department] = data;
            if (department == "Expository Writing") {
              this.expos = this.department_gems['Expository Writing'].filter((x: any) => x.course_code != "EXPOS 40");
            }
          }
        )
      }
    });

    this.http.get('/assets/data/spring2025/hidden_gems.json').subscribe(data => {
      this.hidden_gems = data;
      this.selected_hidden_gems = this.hidden_gems.filter((x: any) => [
        "HEB 30",
        "CLS-STDY 166",
        "TDM 121MV",
        "SOCIOL 1129",
        "GHHP 50",
      ].includes(x.course_code));

      // remove duplicate codes by course_code
      this.selected_hidden_gems = this.selected_hidden_gems.filter((x: any, index: number, self: any) =>
        index === self.findIndex((t: any) => (
          t.course_code === x.course_code
        ))
      )
    });
  }
}


