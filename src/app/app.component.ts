import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBe4xeAwl-QkhS_XoMVZqiaF43EGPyF_rw',
      authDomain: 'ng-recipe-book-9877b.firebaseapp.com'});
  }
}
