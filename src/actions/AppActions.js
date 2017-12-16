import {BASE_URL} from "../API/constants";
import {GIT_USERS_FETCH_FAILED, GIT_USERS_FETCH_SUCCESS, LOADING_GIT_USERS} from "./actionTypes";
import axios from 'axios';


export const getGitHubUsers = () => {

    return (dispatch) => {

        dispatch({type: LOADING_GIT_USERS});


        axios(BASE_URL + 'users').then(function (response) {

            if (response.status === 200) {

                dispatchFetchedGitUsers(dispatch, response.data)
            } else {
                dispatchFailedGitUsers(dispatch, response.data)

            }

        })


    }

};


const dispatchFetchedGitUsers = (dispatch, response) => {

    dispatch(
        {
            type: GIT_USERS_FETCH_SUCCESS,
            response
        },
    );

};


const dispatchFailedGitUsers = (dispatch, response) => {

    dispatch(
        {
            type: GIT_USERS_FETCH_FAILED,
            response
        },
    );

};

