import { Component } from '@angular/core';

/* This is the component similar to the React Component
    selector => how the component if referred to else-where (unique-identifier)
    templateUrl => Where to grab the html for this component
    stylesUrls => The css for this component
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// We then export the component with a title property
export class AppComponent {
  title = 'ng6-proj';
}
