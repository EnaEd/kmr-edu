import {Injectable} from '@angular/core';
import {
  Firestore,
  collection,
  query,
  orderBy,
  limit,
  getDocs,
} from '@angular/fire/firestore';
import {PagedResponse} from '../../models/paged-response';
import {Event} from '../../models/events/event';

@Injectable({providedIn: 'root'})
export class EventService {
  constructor(private firestore: Firestore) {
  }

  async getEventPage(): Promise<PagedResponse<Event>> {
    //TODO EE: improve request for getting paged data
    const ref = collection(this.firestore, 'events');
    const q = query(ref, orderBy('name'), limit(3));
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map(doc => ({
      id: doc.id,
      name: doc.data()['name'],
      description: doc.data()['description'],
      thumbImage: doc.data()['thumbImage'],
      date: doc.data()['date'].toDate().toISOString().slice(0, 10),
      location: doc.data()['location'],
      photos: []
    }));
    const lastDoc = snapshot.docs[snapshot.docs.length - 1];
    const lastItem: Event = {
      id: lastDoc.id,
      name: lastDoc.data()['name'],
      description: lastDoc.data()['description'],
      thumbImage: lastDoc.data()['thumbImage'],
      date: lastDoc.data()['date'],
      location: lastDoc.data()['location'],
      photos: []
    };
    return { //TODO EE: place for return hard data during test
      data,
      lastItem,
      page: 0,
      pageSize: 0,
      hasNext: false,
      hasPrevious: false
    };
  }
}
