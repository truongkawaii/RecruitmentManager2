import { combineReducers } from 'redux';
import allJobsReducer from './all-jobs';
import allCandidateReducer from './all-candidate';
import tokenExpReducer from './tokenExp';
import loginReducer from './login';
import usersReducer from './users';
// Combine reducer
const rootReducer = combineReducers({
  allJobs: allJobsReducer,
  allCandidate: allCandidateReducer,
  tokenExpState: tokenExpReducer,
  loginState: loginReducer,
  usersState: usersReducer,
});

export default rootReducer;
