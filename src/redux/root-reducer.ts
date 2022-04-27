import { combineReducers } from 'redux';
import sheetReducer from './sheet/sheet.reducers';

const rootReducer = combineReducers({
    sheet: sheetReducer
})

export default rootReducer;