import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../../../services/common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Quizdb } from '../quizdb.model';
import { AddQuestionComponent } from '../add-question/add-question.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  tableHeader: any = ['Question', 'Options', 'action'];
  quizList: Quizdb[];
  selectedQue: any;

  @ViewChild(AddQuestionComponent, { static: true }) private editQue: AddQuestionComponent;

  // addQuestion() {
  //   this._router.navigate(['/quiz/add-question']);
  // }
  deleteRecord(key: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this._cS.deleteQuiz(key);
      this._cS.displayToast(2, "Delete Record successfully")
    }
  }
  editRecord(question) {
    this._cS.selectedQuestion = Object.assign({}, question);
    this._router.navigate(['/quiz/add-question'], { queryParams: { id: question.$key } });
  }

  constructor(private _cS: CommonService, private _router: Router, private _route: ActivatedRoute, ) { }

  ngOnInit() {
    var getuserdata = this._cS.getData();
    getuserdata.snapshotChanges().subscribe(item => {
      this.quizList = [];
      item.forEach(element => {
        var addrecord = element.payload.val();
        addrecord["$key"] = element.key;
        this.quizList.push(addrecord as Quizdb);
      });
    });
  }
}
