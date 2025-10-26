import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-spring2026',
  templateUrl: './spring2026.component.html',
  styleUrls: ['./spring2026.component.scss']
})
export class Spring2026Component implements OnInit {
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
  term_code ="2262"// get this 4-digit by going to my.harvard and use the advanced search
  term = "(Term%3A%5C%22" + this.term_code + "%5C%22)"
  url_prefix = 'https://portal.my.harvard.edu/psp/hrvihprd/EMPLOYEE/EMPL/h/?tab=HU_CLASS_SEARCH&SearchReqJSON=%7B%22SearchText%22%3A%22'
  url_suffix = '%22%7D';

  constructor(private http: HttpClient) { }

  getDataHttp(url: string) {
    return this.http.get(url);
  }

  ngOnInit() {
    // Load main data files
    this.http.get('/assets/data/spring2026/super_gems.json').subscribe(data => {
      this.super_gems = data;
      this.selected_super_gems = this.super_gems.filter((x: any) => [
        'MBB 980H',
        "PSY 18",
        "AFRAMER 119X",
        "E-PSCI 133",
        "ENGLISH 185E",
      ].includes(x.course_code));
    });

    this.http.get('/assets/data/spring2026/great_courses.json').subscribe(data => {
      this.great_courses = data;
      this.selected_great_courses = this.great_courses.filter((x: any) => [
        "SLAVIC 97",
        "AFVS 152F",
        "RELIGION 33",
        "SOC-STD 98WN",
        "SCRB 135"
      ].includes(x.course_code));
    });

    this.http.get('/assets/data/spring2026/department_list.json').subscribe(data => {
      this.department_list = data;
      this.full_department_list = data;
      this.partial_department_list = data;
      for (let spec_department of this.special_list) {
        this.partial_department_list = this.partial_department_list.filter((x: string) => x !== spec_department);
      }
      this.special_list = this.special_list.filter((x: string) => x !== 'Expository Writing');
      for (let department of this.department_list) {
        this.getDataHttp(`assets/data/spring2026/departments/${department}.json`).subscribe(
          (data: any) => {
            this.department_gems[department] = data;
            if (department == "Expository Writing") {
              this.expos = this.department_gems['Expository Writing'].filter((x: any) => x.course_code != "EXPOS 40");
            }
          }
        )
      }
    });

    this.http.get('/assets/data/spring2026/hidden_gems.json').subscribe(data => {
      this.hidden_gems = data;
      this.selected_hidden_gems = this.hidden_gems.filter((x: any) => [
        "HIST 1973",
        "HEB 145",
        "PSY 1322",
        "HAA 279P",
        "SOCIOL 1148",
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


