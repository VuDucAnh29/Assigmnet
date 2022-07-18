import { DISHES } from "../data/dishes";
import { PROMOTIONS } from "../data/promotions";
import { LEADERS } from "../data/leaders";
import { COMMENTS } from "../data/comments";

export const initialState = {
   dishes: DISHES,
   promotions: PROMOTIONS,
   leaders: LEADERS,
   comments: COMMENTS,
};

export const Reducer = (state = initialState, action) => {
   return state;
};
