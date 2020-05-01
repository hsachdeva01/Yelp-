import { RECEIVE_ALL_BUSINESSES, RECEIVE_BUSINESS } from '../actions/business_actions';

const businessesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_BUSINESSES:
      return Object.assign({}, state, action.businesses)
    case RECEIVE_BUSINESS:
      const business = {[action.business.id]: action.business};
      return Object.assign({}, state, business);
    default:
      return state;
  }
};


export default businessesReducer;
