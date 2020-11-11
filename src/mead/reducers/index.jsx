import { combineReducers } from 'redux';
import LearnerReducer from './reducer-learner.jsx';

const rootReducer = combineReducers({
  guild: LearnerReducer,
});

export default rootReducer;
