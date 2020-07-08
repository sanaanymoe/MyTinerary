export const RECEIVE_ALL_ERRORS = "RECEIVE_ALL_ERRORS";
export const REMOVE_ALL_ERRORS = "REMOVE_ALL_ERRORS"
export const receiveAllErrors = errors => {
    return {
        type: RECEIVE_ALL_ERRORS,
        errors
    }
}

export const removeAllErrors = ()=> {
    return {
        type: REMOVE_ALL_ERRORS

    }
}