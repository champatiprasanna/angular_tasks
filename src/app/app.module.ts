import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { BodyComponent } from './body/body.component';
import { TaskComponent } from './task1/task.component';
import { TasksComponent } from './task2/tasks.component';

import { SolutionNestComponent } from './task2/solutionnest/solutionnest.component';
import { SolutionNest2Component } from './task2/solutionnest2/solutionnest2.component';
import { SolutionNest3Component } from './task2/solutionnest3/solutionnest3.component';
import { SolutionNest4Component } from './task2/solutionnest4/solutionnest4.component';
import { InlineComponent } from './task2/inline/inline.component';
import { Inline2Component } from './task2/inline2/inline2.component';
import { Inline3Component } from './task2/inline3/inline3.component';
import { Inline4Component } from './task2/inline4/inline4.component';

import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    BodyComponent,
    TaskComponent,
    TasksComponent,
  
    SolutionNestComponent,
    SolutionNest2Component,
    SolutionNest3Component,
    SolutionNest4Component,
    InlineComponent,
    Inline2Component,
    Inline3Component,
    Inline4Component,
    FooterComponent,
    
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
