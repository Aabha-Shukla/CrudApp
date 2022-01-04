import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss'],
})
export class DataListComponent implements OnInit {
  updatedTutorials: any;
  letsPush: boolean = false;
  tutorials: any[] = [
    {
      title: 'user1',
      description: 'made in china',
      published: false,
      id: 1,
    },
    {
      title: 'user 2',
      description: 'made in japan',
      published: false,
      id: 2,
    },
    {
      title: 'user 3',
      description: 'made in korea',
      published: false,
      id: 3,
    },
    {
      title: 'user 4',
      description: 'made in korea',
      published: false,
      id: 4,
    },
    {
      title: 'user 5',
      description: 'made in korea',
      published: false,
      id: 5,
    },
    {
      title: 'user 6',
      description: 'made in korea',
      published: false,
      id: 6,
    },
    {
      title: 'user 7',
      description: 'made in korea',
      published: false,
      id: 7,
    },
  ];
  currentTutorial: any = {};
  currentIndex = -1;
  title = '';
  editvalue: any;

  constructor(private tutorialService: TutorialService) {}

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {}

  refreshList(): void {
    this.retrieveTutorials();
    this.currentTutorial = {};
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial: any, index: any): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  removeAllTutorials(): void {
    this.tutorialService.deleteAll();
    this.retrieveTutorials();
  }

  deleteBtn(index: any) {
    this.tutorials.splice(index, 1);
  }

  searchTitle(): void {
    // this.tutorialService.findByTitle(this.title).subscribe(
    //   (data) => {
    //     this.tutorials = data;
    //     console.log(data);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );

    let result = this.tutorials.find(({ title }) => title === 'user 2');
    console.log(result);
  }

  receiveDetails(e: any) {
    if (e.isUpdate) {
      this.tutorials = this.tutorials.filter((value) => {
        if (value.id == e.id) {
          value.title = e.title;
          value.description = e.description;
        } else {
          this.letsPush = true;
        }
        this.updatedTutorials = this.tutorials;
      });
      this.tutorials = this.updatedTutorials;
    } else {
      this.tutorials.push(e);
    }
  }
  update(data: any) {
    console.log(data);
  }

  setValue(item: any) {
    console.log(item);
    item.readOnlyId = true;
    this.editvalue = item;
  }
}
