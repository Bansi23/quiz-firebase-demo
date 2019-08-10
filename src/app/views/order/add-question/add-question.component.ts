import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { CommonService } from '../../../services/common.service';
import { ActivatedRoute } from '@angular/router';
import { Quizdb } from '../quizdb.model';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {
  quizList: Quizdb[];
  addQuestionForm: FormGroup;
  isEdit: boolean = false;
  indexque: number = 1;
  id: any  =1;
  fbAddQuestionForm() {
    this.addQuestionForm = this.fb.group({
      que_id: this.indexque,
      question: [null, Validators.required],
      options: this.fb.array([]),
    });
  }

  editQuetion(row) {
  }

  get options() {
    return this.addQuestionForm.get('options') as FormArray;
  }
  index: number = 1;
  initItemRows() {
    return this.fb.group({
      id: this.index++,
      options: ['', Validators.required],
      answer: [false, Validators.required],
    });
  }

  getParam() {
    this._route.queryParams.subscribe(params => {
      this.id = params['id']
    });
  }
  getRec() {
    // this.getParam();
    // if (this._cS.selectedQuestion) {
    //   this.addQuestionForm.patchValue({
    //     question: this._cS.selectedQuestion.question ? this._cS.selectedQuestion.question : null,
    //   });
    //   this.addQuestionForm.setControl('options', this.setexistingItem(this._cS.selectedQuestion.options));
    // }
    // else {
    //   this._cS.displayToast(2, 'get error')
    // }
  }

  setexistingItem(itemSets): FormArray {
    const formarray = new FormArray([]);
    itemSets.forEach(e => {
      formarray.push(this.fb.group({
        id: e.id,
        options: e.options,
        answer: e.answer
      }));
    });
    return formarray;
  }

  addNewRow() {
    this.options.push(this.initItemRows());
  }
  addQuetion() {
    this.getParam();
    for (let val in this.addQuestionForm.controls) {
      this.addQuestionForm.controls[val].markAsTouched();
    };
    const QuizData = this.addQuestionForm.value;
    QuizData.que_id = this.quizList.length + 1;
    if (QuizData.$key == null) {
      if (this.addQuestionForm.valid) {
        this._cS.insertQuiz(QuizData);
        this._cS.displayToast(1, 'Added question successfully');
        this.ngOnInit();
      }
    }
    else {
      if (this.addQuestionForm.valid) {
        this._cS.updateQuiz(QuizData);
        this._cS.displayToast(1, 'Update question successfully');
      }
    }
  }

  constructor(private fb: FormBuilder, private _cS: CommonService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.fbAddQuestionForm();
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
