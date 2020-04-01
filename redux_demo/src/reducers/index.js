import FoodReducer from './food';
import UserReducer from  './user';
import SelectFood from  './show-food';
import { combineReducers } from "redux";

const allReducers = combineReducers({
    foods: FoodReducer,
    users: UserReducer,
    selectFood: SelectFood
});

export default allReducers;