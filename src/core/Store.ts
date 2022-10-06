import EventBus from './EventBus';
import { StoreEvents } from 'types';
import { initialState } from '../initialState';

class Store<T> extends EventBus {
  state: T | null;

  constructor(initialData: T | null = null) {
    super();
    this.state = initialData;
  }

  getState() {
    return this.state;
  }

  setState(newData: T, action?: string) {
    this.state = { ...this.state, ...newData };
    this.emit(action ? action : StoreEvents.update);
  }
}

export default new Store(initialState);
