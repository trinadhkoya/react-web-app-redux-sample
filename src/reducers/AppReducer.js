import {GIT_USERS_FETCH_FAILED, GIT_USERS_FETCH_SUCCESS, LOADING_GIT_USERS} from "../actions/actionTypes";

const INITIAL_STATE =
    {
        inProgress: false,
        gitUsers: [],
    };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOADING_GIT_USERS:
            console.log(action);
            return {...state, INITIAL_STATE};
        case GIT_USERS_FETCH_SUCCESS:
            console.log(action);

            return {
                ...state, INITIAL_STATE,
                gitUsers: action.response ? action.response : []
            };
        case GIT_USERS_FETCH_FAILED:
            return {
                ...state, INITIAL_STATE,
                gitUsers: []
            };

        default:
            return state;
    }
};
