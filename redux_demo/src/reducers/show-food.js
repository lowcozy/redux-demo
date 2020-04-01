import { SELECT_FOOD } from "../actions/const";

export default (state = {}, action) => {
    switch (action.type) {
        case SELECT_FOOD:
            // console.log(state);
            // console.log(action);
            // console.log('reducer select food');
            return action.payload;
        default:
            return {};
    }
    return {}
}