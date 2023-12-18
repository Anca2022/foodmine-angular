import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {
@Input() messageDisplay:string = 'Page not found';
@Input() messageRedirect:string = 'Go to homepage';
@Input() routeRedirect:string = '/';

}
