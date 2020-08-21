import { Component } from '@angular/core';
import { PersonalService} from './services/personal.service';
import { Personal } from './services/personal';
import { AngularFirestore} from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
products;

  constructor(
    private afs: AngularFirestore,
    private personalService: PersonalService) { }

  ngOnInit() {
    this.personalService.getHomePublishing().subscribe(personals=> this.personals = personals)
  }

}