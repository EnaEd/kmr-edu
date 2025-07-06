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
import {Staff} from '../../models/staff/staff';

@Injectable({providedIn: 'root'})
export class StaffService {
  constructor(private firestore: Firestore) {
  }

  async getStaffPage(): Promise<PagedResponse<Staff>> {
    const ref = collection(this.firestore, 'schools');
    const q = query(ref, orderBy('name'), limit(3));
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map(doc => ({
      id: doc.id,
      name: doc.data()['name'],
      image: doc.data()['image'],
      position: doc.data()['position']
    }));
    const lastDoc = snapshot.docs[snapshot.docs.length - 1];
    const lastItem: Staff = {
      id: lastDoc.id,
      name: lastDoc.data()['name'],
      image: lastDoc.data()['image'],
      position: lastDoc.data()['position']
    };
    return {
      data,
      lastItem,
      page: 0,
      pageSize: 0,
      hasNext: false,
      hasPrevious: false
    };
  }
}
