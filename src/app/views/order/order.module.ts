import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { RemoveQuestionComponent } from './remove-question/remove-question.component';
import { StartQuizComponent } from './start-quiz/start-quiz.component';
import { GetScoredComponent } from './get-scored/get-scored.component';
//import { AngularFireModule } from 'angularfire2';
//import { environment } from '../../../environments/environment';



@NgModule({
  declarations: [HomePageComponent, AddQuestionComponent, RemoveQuestionComponent, StartQuizComponent, GetScoredComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    //AngularFireModule.initializeApp(environment.firebaseConfig),
  ]
})
export class OrderModule { }
