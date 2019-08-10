import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { RemoveQuestionComponent } from './remove-question/remove-question.component';
import { StartQuizComponent } from './start-quiz/start-quiz.component';
import { GetScoredComponent } from './get-scored/get-scored.component';


const routes: Routes = [

  {
    path: '',
    data: { title: 'Quiz' },
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomePageComponent, data: { title: 'Home' } },
      { path: 'add-question', component: AddQuestionComponent, data: { title: 'Add question' } },
      { path: 'remove-question', component: RemoveQuestionComponent, data: { title: 'Remove question' } },
      //{ path: 'start-quiz/:id', component: StartQuizComponent, data: { title: 'Start quiz' } },
      { path: 'start-quiz', component: StartQuizComponent, data: { title: 'Start quiz' } },
      { path: 'get-scored', component: GetScoredComponent, data: { title: 'Scored' } },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
