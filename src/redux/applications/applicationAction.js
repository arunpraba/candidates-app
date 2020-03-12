import { applicationTypes } from './applicationTypes';
import { getMethod, postMethod } from '../../web/api';

export const getApplications = id => {
  return async dispatch => {
    try {
      const { data } = await getMethod(`/applications/${id}`);
      dispatch({
        type: applicationTypes.GET_APPLICATION,
        payload: data
      });
    } catch (error) {
      console.warn(error.message);
    }
  };
};

export const removeApplications = () => ({
  type: applicationTypes.GET_APPLICATION
});

export const getVideoComments = () => {
  return async dispatch => {
    try {
      const { data } = await getMethod('/comments');
      dispatch({
        type: applicationTypes.GET_VIDEO_COMMENTS,
        payload: data
      });
    } catch (error) {
      console.warn(error.message);
    }
  };
};

export const postComment = postData => {
  return async dispatch => {
    try {
      const { data } = await postMethod('/comments', postData);
      dispatch({
        type: applicationTypes.POST_VIDEO_COMMENTS,
        payload: data
      });
    } catch (error) {
      console.warn(error.message);
    }
  };
};
