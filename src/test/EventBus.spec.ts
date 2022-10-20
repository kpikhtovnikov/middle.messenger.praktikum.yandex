import EventBus from '../core/EventBus';
import { expect } from 'chai';
import * as sinon from 'sinon';

describe('core/EventBus', () => {
  const eventBus = new EventBus();

  const mock = sinon.spy();

  it('on and emit event', () => {
    eventBus.on('test-event', mock);
    eventBus.emit('test-event');

    expect(mock).to.have.been.caller();
  });

  it('must return error', () => {
    try {
      eventBus.emit('test-event1');
      eventBus.off('test-event1', mock);

      eventBus.on('test-event1', mock);
    } catch (err) {
      const objError = err as Error;
      expect(objError.message).equal('Нет события: test-event1');
    }
  });
});
