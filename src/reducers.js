import { combineReducers } from "redux";
import actorsReducer from "./app/actors/duck";
import moviesReducers from "./app/movies/duck";

const rootReducer = combineReducers({
  actors: actorsReducer,
  movies: moviesReducers,
});
export default rootReducer;
