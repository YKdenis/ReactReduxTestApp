import {FETCH_PLANETS} from "../actions";

export default function(state = null, action) {
    switch (action.type) {
        case FETCH_PLANETS:
            return action.payload.data.results;
    }
    return state;
}