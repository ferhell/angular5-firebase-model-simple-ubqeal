import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore} from 'angularfire2/firestore';
import { Personal} from './personal';
import { map } from 'rxjs/operators';

@Injectable()
export class PersonalService {

  constructor(private afs: AngularFirestore) { }

  getHomePublishing(){

    return this.afs.collection('/personal', ref => ref.where('publish', '==', true))
      .snapshotChanges()
      .map(action => {
        return action.map(
          item => {
            const id = item.payload.doc.id;
            const data = {id, ...item.payload.doc.data() };
            return data;
          });
      });
  }



}