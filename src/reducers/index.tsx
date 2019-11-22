const initialState = {
  posts: [],
  currentPost: {},
  createdPostId: -1,
};

const rootReducer = (
  state: object = initialState,
  action: { type: string; payload?: any },
): object => {
  const { type, payload } = action;

  switch (type) {
    case 'GET_POSTS_SUCCESS':
      return {
        ...state,
        posts: [...payload],
      };

    case 'GET_POST_BY_ID_SUCCESS':
      return {
        ...state,
        currentPost: { ...payload },
      };
    case 'ADD_POST_SUCCESS':
      return {
        ...state,
        createdPostId: payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
