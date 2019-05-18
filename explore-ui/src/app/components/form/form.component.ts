import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  profileForm = new FormGroup({
    username : new FormControl(''),
    password : new FormControl('')
  })
  constructor() {}

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.profileForm.value)
  }

}
