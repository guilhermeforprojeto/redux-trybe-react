import { categories } from "../data";

const INITIAL_STATE = {
  categories: [...categories],
  selectedMovie: {},
  selectedCategory: {},

}

function MovieReducer(state = INITIAL_STATE, action) {
  if (action.type === "SELECT_MOVIE") {
    return {
      ...state,
      selectedMovie: action.movie,
      selectedCategory: action.category,
    };
  }
  return state;
}

export default MovieReducer;