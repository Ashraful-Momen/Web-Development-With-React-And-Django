const redux = require("redux");


//state:
const initState = {
	name: "Ashraful",
    num:0,
};

//reducer:(Currentstate, action-> define CRUD ) : return state( crud/not crud );
const rootReducer = (state = initState, action) => {

    if(action.type== "INCREMENT_NUM"){
        return{
            ...state,
            num:state.num+1,
        }
    }
    if(action.type== "ADD_NUM"){
        return{
            ...state,
            num:state.num+action.value,
        }
    }
	return state;
};
//store:
const store = redux.createStore(rootReducer);
// console.log(store); return object with some function.
console.log(store.getState());

//subscription: see the update of state after each dispatch of action....
store.subscribe(()=>{
    console.log('[Subscription]',store.getState());
})



//Dispatch Action:
// console.log(store); // see the store function.

store.dispatch({
    type:"INCREMENT_NUM", // TYPE : UPPER_CASE.
})

store.dispatch({
    type:"ADD_NUM",
    value:30,
})


 










// store have those function:------------------------------
// {
//     dispatch: [Function: dispatch],
//     subscribe: [Function: subscribe],
//     getState: [Function: getState],
//     replaceReducer: [Function: replaceReducer],
//     '@@observable': [Function: observable]
//   }
// ----------------------------------------------------------
