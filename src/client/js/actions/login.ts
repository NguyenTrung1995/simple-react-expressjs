import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

// action names
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';

// actions
export const loginAction = actionCreator(LOG_IN);
export const logoutAction = actionCreator(LOG_OUT);