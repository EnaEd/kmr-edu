import {Staff} from '../../models/staff/staff';
import {patchState, signalStore, withMethods, withState} from '@ngrx/signals';
import {PagedResponse} from '../../models/paged-response';
import {inject} from '@angular/core';
import {StaffService} from './staff-service';

type StaffStore = {
  staff: PagedResponse<Staff>,
  isLoading: boolean
};
const initialState: StaffStore = {
  staff: {
    data: [],
    lastItem: {
      id: '',
      name: '',
      position: '',
      image: ''
    },
    page: 0,
    pageSize: 0,
    hasNext: false,
    hasPrevious: false,
  },
  isLoading: false
}

export const StaffStore = signalStore(
  {providedIn: "root"},
  withState(initialState),
  withMethods((store, staffService = inject(StaffService)) => ({
    async loadStaff() {
      patchState(store, {isLoading: true})
      const staff = await staffService.getStaffPage();
      patchState(store, {staff, isLoading: false})

    }
  }))
);
