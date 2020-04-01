import { SELECT_FOOD } from './const';

export const selectFood = (food) => {
    console.log('You clicked : ' + food.name);
    return {
        type : SELECT_FOOD,
        payload: food
    }
};