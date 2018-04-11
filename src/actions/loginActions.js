export const LOGIN = 'LOGIN';
export const LOGIN = 'LOGIN_PENDING';
export const LOGIN = 'LOGIN_REJECTED';
export const LOGIN = 'LOGIN_FULFILLED';

export function login(values) {
  return dispatch => {
    return dispatch({
      type: LOGIN,
      payload: Promise.resolve()  // add login request
    }).then(() => {
      //add redirect on login success
    })
  }
}