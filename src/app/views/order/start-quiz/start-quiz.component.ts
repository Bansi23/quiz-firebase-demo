import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../services/common.service';
import { Quizdb } from '../quizdb.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.scss']
})
export class StartQuizComponent implements OnInit {
  lstQuestions: Quizdb[];
  temQue: any = [];
  id: any;
  count = 0;
  isbtnNext: boolean = false;
  isbtnPrivious: boolean = true;
  userInfoForm: FormGroup;
  totalScored: number = 0;
  isQuiz: boolean = false;
  cardTitle: string = 'User Info';

  options: { A: 'A', B: 'B', C: 'C', D: 'D' }

  priviousQuetion() {
    this.isbtnNext = false;
    this.count -= 1;
    this.lstQuestions = this.temQue[this.count];
    if (this.count == 0) {
      this.isbtnPrivious = true;
    }
  }

  nextQuetion() {
    if (this.temQue.length) {
      this.count += 1;
      this.lstQuestions = this.temQue[this.count];
    }
  }
  reTest() {
    this.ngOnInit();
  }
  stopQuetion() {
    this._router.navigate(['/quiz/get-scored']);
    this._cS.sendScore(this.totalScored);
    const userVal = this.userInfoForm.value;
    this._cS.senduserInfo(userVal);
  }

  getScore(evt) {
    if (evt.answer == true) {
      this.totalScored += 1;
    }
    if (this.temQue.length - 1 == this.count) {
      this.stopQuetion();
    }
  }

  startQuiz() {
    this.isQuiz = true;
    this.cardTitle = 'Start Quiz';
  }

  constructor(private _cS: CommonService, private _route: ActivatedRoute, private fb: FormBuilder, private _router: Router) { }

  ngOnInit() {
    var getuserdata = this._cS.getData();
    getuserdata.snapshotChanges().subscribe(item => {
      this.lstQuestions = [];
      item.forEach(element => {
        var addrecord = element.payload.val();
        addrecord["$key"] = element.key;
        this.temQue.push(addrecord as Quizdb);
        this.lstQuestions = this.temQue[this.count]
      });
    });
    this.userInfoForm = this.fb.group({
      username: ['', Validators.required]
    });
  }
}
