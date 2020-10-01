// constant for spinner 
export const REQUEST_POSTS = "REQUEST_POSTS"; 

// constant for when data recieved from api
export const RECIEVE_POSTS = "RECIEVE_POSTS"; 

// starring post adds it to favourites
export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";

// removing post removes it from favourites
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES"; 


// Create Reducer pure function
export function createReducer(initialState, handlers) {
    return function reducer(state = initialState, action) {
      if (handlers.hasOwnProperty(action.type)) {
        return handlers[action.type](state, action);
      } 
      else {
        return state;
      }
   }
}