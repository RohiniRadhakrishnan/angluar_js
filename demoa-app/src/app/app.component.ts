import { Component } from '@angular/core';

@Component({
  selector: 'my-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoa-app';
  location='Theni';

onBoxValuChange(paramData:any)
{
console.log("app component:" + paramData.value);
}
}

// class AboutComponent{

// }
//@componenet({
  //selector:'app-root',
  //template:<h1>Inline HTML Content</h1>,
//styleUrls:['./app.component.css']
// })
