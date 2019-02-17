import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-kit',
  templateUrl: './form-kit.component.html',
  styleUrls: ['./form-kit.component.css']
})
export class FormKITComponent implements OnInit {
//formBuil:FormBuilder
  formGroup:FormGroup;
  constructor(
    private formBuil: FormBuilder
  ){}
  ngOnInit() {
    this.formGroup = this.formBuil.group({
      firstName: [''],
      lastName: ['']
    })
  }

}
