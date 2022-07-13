import {combineReducers,applyMiddleware,createStore} from 'redux';
import thunk from "redux-thunk";
import popupReducer from './reducers/popupReducer';
import { QuanLyNguoiDungReducer } from './reducers/QuanLyNguoiDungReducer';

const rootReducer = combineReducers({
    QuanLyNguoiDungReducer: QuanLyNguoiDungReducer,
    popup: popupReducer
});

export const store= createStore(rootReducer,applyMiddleware(thunk));