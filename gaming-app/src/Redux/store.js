import { legacy_createStore,applyMiddleware,combineReducers } from "redux";
import thunk from "redux-thunk"
import { reducer as audioreducer } from "./Audiored/reducer";
import {reducer as yellreducer} from "./Yellowludo/reducer"
import {reducer as blureducer} from "./BlueLudo/reducer"
const rootReducer=combineReducers({
    audioreducer,
    yellreducer,
    blureducer
})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))