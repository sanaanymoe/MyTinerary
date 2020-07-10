import * as APIUtil from '../util/api/user_api_util';

export const GET_USERS = 'GET_USERS';

export const fetchUsers = users => ({
  type: GET_USERS,
  users
});

export const receiveUsers = () => dispatch => (
  APIUtil.getUsers().then(users => (
    dispatch(fetchUsers(users))
  ))
);