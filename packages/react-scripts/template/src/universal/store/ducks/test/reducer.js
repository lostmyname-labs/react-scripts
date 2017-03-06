import { TEST } from './actions';

var defaultState = 'initial value';

// Try this out by opening Redux Dev Tools and dispatching { type: 'TEST' }
export default function testReducer(state = defaultState, action) {
  if (action.type === TEST) {
    return 'value after TEST action dispatched';
  }
  return state;
};