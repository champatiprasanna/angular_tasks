import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';

  public name1 = "String Interpolation";
  public name2 = "Property Binding";
  public name3 = "Evene Binding";
  public name4 = "TwoWay Data Binding";
  public site = "https://blog.johnwu.cc/images/a/196.png";
  public activate = false;
  public task1= false;
  public task2 = false;
  public task3 = false;

  public task4 = true;

  public renderpara = true;

  public num = "20";

  public color = "cyan";

  public day = "wed";

  public colors = ["Black", "Purple", "Red","Orange"];
  public days = ["MON", "TUE", "WED", "THU"];
  public value = ["Angular", "TypeScript", "BootStrap", "JavaScript", 'true', 20, 30];
  constructor() {

    setInterval(() => {
      this.activate = true;
  
    },2000  )

  }
}
