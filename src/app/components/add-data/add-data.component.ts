import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnChanges,
} from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.scss'],
})
export class AddDataComponent implements OnInit, OnChanges {
  tutorial = {
    title: '',
    description: '',
    published: false,
    id: '',
  };
  isUpdate = false;
  submitted = false;
  addForm: FormGroup;
  @Output() updatedValue: any = new EventEmitter<any>();
  @Input() demo: any;
  @Output() data: any = new EventEmitter<any>();

  constructor(private tutorialService: TutorialService) {
    this.addForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      id: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

  get form() {
    return this.addForm.controls;
  }

  ngOnChanges() {
    this.addForm.patchValue(this.demo);
  }

  saveTutorial(): void {
    const data = {
      title: this.tutorial.title,
      description: this.tutorial.description,
    };

    this.tutorialService.create(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  sendDetails() {
    this.submitted = true;
    if (this.addForm.invalid) {
      return;
    }
    this.data.emit(this.addForm.value);
    this.addForm.reset();
    this.submitted = false;
  }

  updateDetails() {
    this.isUpdate = true;
    this.addForm.value.isUpdate = this.isUpdate;
    this.updatedValue.emit(this.addForm.value);
    this.data.emit(this.addForm.value);
    this.addForm.reset();
  }

  addMore() {
    this.submitted = false;
  }
}
