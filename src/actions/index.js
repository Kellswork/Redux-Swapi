// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

function fetching(isFetching) {
    return {
        type: FETCHING,
        payload: isFetching,
    };
}

function success(data) {
    return {
        type: SUCCESS,
        payload: data,
    };
}

function failure(error) {
    return {
        type: FAILURE,
        payload: error,
    };
}

export const fetchPeopleData = () => dispatch => {
    dispatch(fetching(true))
    axios.get('https://swapi.co/api/people/')
        .then(res => {
            dispatch(success(res.data.results))
        })
        .catch(error => {
            console.log('error.message');
            dispatch(failure(error.message))
        }).
        finally(() => {
            dispatch(fetching(false))
        })
}