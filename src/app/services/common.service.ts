import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

import { AppComponent } from '../app.component';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Quizdb } from '../views/order/quizdb.model';
import { Userscore } from '../models/userscore';
//import {FirebaseListObservable} from 'angularfire2/database';

//const internetMessage = 'Please check your internet connection !!';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  quizList: AngularFireList<any>;

  selectedQuestion: Quizdb = new Quizdb();
  //  getKey: FirebaseListObservable<Quizdb[]> = null;
  getId: AngularFireObject<any>;
  path: string;
  score: any;
  userInfo: any;

  //#region loader
  Display_Loader(value: boolean) {
    this._app.Display_Loader(value);
  };
  //#endregion

  displayToast(type: number, message?: any, title?: any, ) {
    let typeString;
    switch (type) {
      case 1: { typeString = 'success'; break; };
      case 2: { typeString = 'error'; break; };
      case 3: { typeString = 'warning'; break; };
      case 4: { typeString = 'info'; break; };
      default: { typeString = 'error'; break; };
    };
    title = title ? title : null;
    this._app.popToast(typeString, title, message);
  };
  // #endregion

  getData() {
    this.quizList = this.firebase.list('quiz');
    this.path = '/quiz';
    return this.quizList;
  }

  insertQuiz(_quiz: Quizdb) {
    this.quizList = this.firebase.list('quiz');
    if (_quiz) {
      this.quizList.push({
        id: _quiz.que_id,
        question: _quiz.question,
        options: _quiz.options
      });
    }
  }

  getUserScored() {
    this.quizList = this.firebase.list('userscore');
    return this.quizList;
  }

  insertUserScored(user: Userscore) {
    this.quizList = this.firebase.list('userscore');
    if (user) {
      this.quizList.push({
        username: user.username,
        score: user.score
      });
    }
  }

  updateQuiz(_quiz: Quizdb) {
    this.quizList.update(_quiz.$key, {
      id: _quiz.que_id,
      question: _quiz.question,
      options: _quiz.options
    });
  }
  deleteQuiz($key: string) {
    this.quizList.remove($key);
  }

  sendScore(score) {
    this.score = score;
  }
  getscore() {
    return this.score;
  }

  senduserInfo(userInfo) {
    this.userInfo = userInfo;
  }
  getUserInfo() {
    return this.userInfo;
  }


  //#endregion
  constructor(public _router: Router,
    public _route: ActivatedRoute,
    public _httpClient: HttpClient,
    public _app: AppComponent,
    private firebase: AngularFireDatabase
  ) { }
}
