export type Listener<T extends unknown[] = any[]> = (...args: T) => void;

export default class EventBus<
  event extends string = string,
  action extends { [K in event]: unknown[] } = Record<event, any[]>
> {
  private listeners: { [key in event]?: Listener<action[event]>[] } = {};

  on(event: event, callback: Listener<action[event]>) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event]?.push(callback);
  }

  off(event: event, callback: Listener<action[event]>) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event]?.filter(
      (listener) => listener !== callback
    );
  }

  emit(event: event, ...args: action[event]) {
    if (!this.listeners[event]) {
      return;
    }

    this.listeners[event]?.forEach(function (listener) {
      listener(...args);
    });
  }
}
