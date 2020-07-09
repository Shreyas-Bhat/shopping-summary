import { combineReducers } from 'redux';
import promoCodeRedcuer from './promoCodeReducer';

export default combineReducers({
    promoCode: promoCodeRedcuer
});

