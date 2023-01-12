import { Component, OnInit } from '@angular/core';
import super_gems from "../data/super_gems.json";
import department_list from "../data/department_list.json"
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  dropDownList: any;
  constructor(private http: HttpClient) { }

  super_gems = super_gems;
  full_department_list = department_list;
  special_list = [
    "General Education",
    "Freshman Seminars",
    "Expository Writing"
  ]
  partial_department_list = department_list;


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

    this.special_list = this.special_list.filter(x => x !== 'Expository Writing');

    for (let department of department_list) {
      this.getDataHttp(`assets/data/departments/${department}.json`).subscribe(
        (data: any) => {
          var testResponse = data;
          this.department_gems[department] = data;
        }
      )

      // import(`../data/departments/${department}.json`).then((data) => {
      //   console.dir(data)
      //   this.department_gems[department] = data;
      // }).catch(error => { debugger; alert(error.message) });
    }
  }
}


