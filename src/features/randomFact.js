import { createAction, createReducer } from "@reduxjs/toolkit";

const isFetching = createAction('is fetching');
const success = createAction('success');
const failure = createAction('failure');

const actions = {isFetching, success, failure };

const STATUS = {
    NORMAL : 'normal',
    FETCHING : 'is fetching',
    SUCCESS : 'success',
    FAILURE : 'failure'
}

const initalState = {
    status : STATUS.NORMAL,
    fact : null
}

const reducer = createReducer(initalState, builder => {
    builder
        .addCase(isFetching, (state, action ) => {
            let newState = {
                status : STATUS.FETCHING,
                fact : state.fact
            }
            return newState;
        })
        .addCase(success, (state, action) => (
            {
                status : STATUS.SUCCESS,
                fact: action.payload
            }
        ))
        .addCase(failure, (state, action) => (
            {
                status : STATUS.FAILURE,
                fact : null
            }
        ))
})

export {actions, reducer, STATUS};


