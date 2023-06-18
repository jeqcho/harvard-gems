import { Component, OnInit } from '@angular/core';
import super_gems from "./data/super_gems.json";
import legendary_courses from "./data/legendary_courses.json";
import great_courses from "./data/great_courses.json";
import department_list from "./data/department_list.json"
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fall2023',
  templateUrl: './fall2023.component.html',
  styleUrls: ['./fall2023.component.scss']
})
export class Fall2023Component {
  dropDownList: any;
  constructor(private http: HttpClient) { }

  super_gems = super_gems;
  legendary_courses = legendary_courses;
  great_courses = great_courses;
  full_department_list = department_list;
  special_list = [
    "General Education",
    "Expository Writing"
  ]
  partial_department_list = department_list;
  selected_great_courses = great_courses;
  expos: any;


  department_gems: Record<string, any> = {}
  BigString = String
  url_prefix = 'https://courses.my.harvard.edu/psp/courses/EMPLOYEE/EMPL/h/?tab=HU_CLASS_SEARCH&SearchReqJSON=%7B%22ExcludeBracketed%22%3Atrue%2C%22SaveRecent%22%3Atrue%2C%22Facets%22%3A%5B%5D%2C%22PageNumber%22%3A1%2C%22SortOrder%22%3A%5B%22SCORE%22%5D%2C%22TopN%22%3A%22%22%2C%22PageSize%22%3A%22%22%2C%22SearchText%22%3A%22';
  url_suffix = '%22%7D'

  getDataHttp(url: string) {

    return this.http.get(url);
  }

  ngOnInit(): void {
    for (let spec_department of this.special_list) {
      this.partial_department_list = this.partial_department_list.filter(x => x !== spec_department);
    }

    for (let legendary_course of this.legendary_courses) {
      this.great_courses = this.great_courses.filter(x => x.useful_title !== legendary_course['useful_title']);
    }
    this.selected_great_courses = this.great_courses.filter(x => !x.course_code.startsWith("EXPOS"));


    this.special_list = this.special_list.filter(x => x !== 'Expository Writing');



    for (let department of department_list) {
      this.getDataHttp(`assets/data/fall2023/departments/${department}.json`).subscribe(
        (data: any) => {
          this.department_gems[department] = data;
          if(department == "Expository Writing"){
            this.expos = this.department_gems['Expository Writing'].filter((x: any) => x.course_code != "EXPOS 40")
          }
        }
      )
    }


  }
}


