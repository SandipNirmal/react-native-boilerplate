const initialState = {
  isPending: false,
  error: '',
  date: ''
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_PENDING:
      return { ...state, fetching: true };

    case LOGIN_FULFILLED:
      return { ...state, fetching: false, data: action.payload.data.data };

    case LOGIN_REJECTED:
      return {
        ...state,
        fetching: false,
        error:
          action.payload.response && action.payload.response.data
            ? action.payload.response.data.displayMsg
            : 'Server Cannot be reached.'
      };

    default:
      return state;
  }
}
