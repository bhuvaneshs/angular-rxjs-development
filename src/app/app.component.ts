import { Component } from "@angular/core";
import { Observable, of, from } from "rxjs";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  datas: any[] = ["data1", "data2", 2];
  // RxJS v6+
  ngOnInit() {
    const observer = {
      next: value => console.log(`Emitted Value : ${value}`),
      error: err => console.log(`Error occurred : ${err}`),
      complete: () => console.log("Action completed")
    };

    const stream = new Observable(observer => {
      for (let data of this.datas) {
        if (data == 2) {
          observer.error("unknown value");
        }
        observer.next(data);
      }
      observer.complete();
    });

    stream.subscribe(observer);
  }
}
