import { Component } from '@angular/core';
import super_gems from "./data/super_gems.json";
import great_courses from "./data/great_courses.json";
import department_list from "./data/department_list.json"
import hidden_gems from "./data/hidden_gems.json"
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fall2025',
  templateUrl: './fall2025.component.html',
  styleUrls: ['./fall2025.component.scss']
})
export class Fall2025Component {
  dropDownList: any;
  constructor(private http: HttpClient) { }

  super_gems = super_gems;
  great_courses = great_courses;
  hidden_gems = hidden_gems;
  full_department_list = department_list;
  special_list = [
    "General Education",
    "First Year Seminar Program",
  ]

  partial_department_list = department_list;
  selected_great_courses = great_courses;
  selected_super_gems = super_gems;
  selected_hidden_gems = hidden_gems;
  expos: any;


  department_gems: Record<string, any> = {}
  BigString = String

  term_code ="2258"// get this 4-digit by going to my.harvard and use the advanced search
  term = "(Term%3A%5C%22" + this.term_code + "%5C%22)"

  url_prefix = 'https://portal.my.harvard.edu/psp/hrvihprd/EMPLOYEE/EMPL/h/?tab=HU_CLASS_SEARCH&SearchReqJSON=%7B%22SearchText%22%3A%22'

  url_suffix = '%22%7D';

  getDataHttp(url: string) {

    return this.http.get(url);
  }

  ngOnInit(): void {
    for (let spec_department of this.special_list) {
      this.partial_department_list = this.partial_department_list.filter(x => x !== spec_department);
    }

    // handpick hidden gems
    // get from matching course indexes

    this.selected_super_gems = this.super_gems.filter((x: any) => [
      'EMR 1010',
      "HEB 123",
      "PSY 1813",
      "GENED 1025",
      "PHIL 9",
    ].includes(x.course_code));

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

    this.selected_great_courses = this.great_courses.filter((x: any) => [
      "AFRAMER 133Y",
      "GOV 1796",
      "ECON 2725",
      "RELIGION 32",
      "EXPOS 40"
    ].includes(x.course_code));

    this.special_list = this.special_list.filter(x => x !== 'Expository Writing');

    for (let department of department_list) {
      this.getDataHttp(`assets/data/fall2025/departments/${department}.json`).subscribe(
        (data: any) => {
          this.department_gems[department] = data;
          if (department == "Expository Writing") {
            this.expos = this.department_gems['Expository Writing'].filter((x: any) => x.course_code != "EXPOS 40");
          }
        }
      )
    }
  }
}


