import _ from 'lodash';
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPostsAndUsers = () => async dispatch => {
  console.log('about to fetch posts');
  await dispatch(fetchPosts());
  console.log('fetched posts');
};

//defining a function that is returning a function
//returns an array
export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get("/posts");

    dispatch({ type: 'FETCH_POSTS', payload: response.data })
  };

//returns a single object for that user
export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
};


//returns a single object for that user
// export const fetchUser = id => dispatch => {
//   _fetchUser(id, dispatch);
// };
//
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//
//   dispatch({ type: 'FETCH_USER', payload: response.data });
// });
