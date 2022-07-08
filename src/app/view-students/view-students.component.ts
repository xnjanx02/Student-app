import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.css']
})
export class ViewStudentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data=[
    {"name":"Rahul","age":45,"photo":"https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"},
    {"name":"Reji","age":41,"photo":"https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"},
    {"name":"Anju","age":43,"photo":"https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"},
    {"name":"Manu","age":40,"photo":"https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"}
    
  ]

}
