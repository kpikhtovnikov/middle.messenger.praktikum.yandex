import { StoreEvents } from 'types';
import store from '../core/Store';
import { expect, assert } from 'chai';
import * as sinon from 'sinon';

describe('core/Store', () => {
  it('must be defined', () => {
    assert.isDefined(store);
  });

  it('should set state', () => {
    store.setState({ users: 'test' });

    const state = store.getState();

    expect(state?.users).equal('test');
  });

  it('should emit event after store was update', () => {
    const mock = sinon.spy();

    store.on(StoreEvents.update, mock);

    store.setState({ users: 'test' });

    expect(mock).to.have.been.caller();
  });
});
