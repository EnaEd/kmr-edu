import {Photo} from '../photos/relatedPhoto';

export interface Event {
  id: string,
  name: string,
  description: string,
  thumbImage: string,
  date: string,
  location: string,
  photos: Photo[]
}
