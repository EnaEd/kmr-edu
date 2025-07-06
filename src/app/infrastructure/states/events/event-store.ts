import {PagedResponse} from '../../models/paged-response';
import {patchState, signalStore, withMethods, withState} from '@ngrx/signals';
import {inject} from '@angular/core';
import {Event} from '../../models/events/event';
import {EventService} from './event-service';

type EventStore = {
  events: PagedResponse<Event>,
  isLoading: boolean
};
const initialState: EventStore = {
  events: {
    data: [],
    lastItem: {
      id: '',
      name: '',
      description: '',
      thumbImage: '',
      date: '',
      location: '',
      photos: []
    },
    page: 0,
    pageSize: 0,
    hasNext: false,
    hasPrevious: false,
  },
  isLoading: false
}

export const EventStore = signalStore(
  {providedIn: "root"},
  withState(initialState),
  withMethods((store, eventService = inject(EventService)) => ({
    async loadEvents() {
      patchState(store, {isLoading: true})
      const events = await eventService.getEventPage();
      patchState(store, {events, isLoading: false})

    }
  }))
);
