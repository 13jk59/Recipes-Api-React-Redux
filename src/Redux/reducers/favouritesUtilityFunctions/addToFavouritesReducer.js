export default function addToFavouritesReducer(state, action) {
    let returnObj = new Map(); 
    // copy old state to new state in a pure fashionn
    // going to have to add back event listener for click events to these dom nodes 
    for (const gridId of state.keys()) {
        returnObj.set(gridId, state.get(gridId).cloneNode(true)); 
    }
    // add new post object to the new state 
    const postId = action.post.classList[action.post.classList.length-1];
    returnObj.set(postId, action.post); 
    return returnObj; 
}
