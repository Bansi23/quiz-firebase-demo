import { Component, OnInit, ViewChild } from '@angular/core';
import { StartQuizComponent } from '../start-quiz/start-quiz.component';
import { CommonService } from '../../../services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-scored',
  templateUrl: './get-scored.component.html',
  styleUrls: ['./get-scored.component.scss']
})
export class GetScoredComponent implements OnInit {
  //@ViewChild(StartQuizComponent, { static: false }) private getscore: StartQuizComponent;

  totalScored: any;
  userInfo: any;

  reTest() {
    this._router.navigate(['/quiz/start-quiz'])
  }
  constructor(private _cS: CommonService, private _router: Router) { }

  ngOnInit() {
    this.totalScored = this._cS.getscore();
    this.userInfo = this._cS.getUserInfo();
    let data = {
      username: this.userInfo,
      score: this.totalScored
    }
    this._cS.insertUserScored(data);
  }
}
