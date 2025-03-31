import { Component } from '@angular/core';
import super_gems from "./data/super_gems.json";
import great_courses from "./data/great_courses.json";
import department_list from "./data/department_list.json"
import hidden_gems from "./data/hidden_gems.json"
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-spring2025',
  templateUrl: './spring2025.component.html',
  styleUrls: ['./spring2025.component.scss']
})
export class Spring2025Component {
  dropDownList: any;
  constructor(private http: HttpClient) { }

  super_gems = super_gems;
  great_courses = great_courses;
  hidden_gems = hidden_gems;
  full_department_list = department_list;
  special_list = [
    "General Education",
    "First Year Seminar Program",
    "Expository Writing"
  ]

  partial_department_list = department_list;
  selected_great_courses = great_courses;
  selected_super_gems = super_gems;
  selected_hidden_gems = hidden_gems;
  expos: any;


  department_gems: Record<string, any> = {}
  BigString = String

  term = "(Term%3A%5C%22" + "2252" + "%5C%22)" // get this 4-digit by going to my.harvard and use the advanced search
  url_prefix = 'https://portal.my.harvard.edu/psp/hrvihprd/EMPLOYEE/EMPL/h/?tab=HU_CLASS_SEARCH&SearchReqJSON=%7B%22ExcludeBracketed%22%3Atrue%2C%22SaveRecent%22%3Atrue%2C%22Facets%22%3A%5B%5D%2C%22PageNumber%22%3A1%2C%22SortOrder%22%3A%5B%22SCORE%22%5D%2C%22TopN%22%3A%22%22%2C%22PageSize%22%3A%22%22%2C%22SearchText%22%3A%22';
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
      'COMPLIT 100',
      "PSY 1702",
      "COMPSCI 196",
      "ASTRON 5",
      "GOV 1759",
    ].includes(x.course_code));

    this.selected_hidden_gems = this.hidden_gems.filter((x: any) => [
      "SCAND 55",
      "MBB 980T",
      "EDST 127",
      "PSY 1021",
      "EXPOS 40",
    ].includes(x.course_code));

    // remove duplicate codes by course_code
    this.selected_hidden_gems = this.selected_hidden_gems.filter((x: any, index: number, self: any) =>
      index === self.findIndex((t: any) => (
        t.course_code === x.course_code
      ))
    )

    this.selected_great_courses = this.great_courses.filter((x: any) => [
      "PHIL 156",
      "ECON 2003",
      "ENGLISH CBW",
      "AFVS 53AR",
      "HAA 279P"
    ].includes(x.course_code));

    this.special_list = this.special_list.filter(x => x !== 'Expository Writing');

    for (let department of department_list) {
      this.getDataHttp(`assets/data/spring2025/departments/${department}.json`).subscribe(
        (data: any) => {
          this.department_gems[department] = data;
          if (department == "Expository Writing") {
            this.expos = this.department_gems['Expository Writing'].filter((x: any) => x.course_code != "EXPOS 40");
            // exlcude the course name Expository Writing 20 210 and Expository Writing 20 225
          this.expos = this.expos.filter((x: any) => x.useful_title != "Expository Writing 20 210")
          this.expos = this.expos.filter((x: any) => x.useful_title != "Expository Writing 20 225")
          }
        }
      )
    }



  }
}


