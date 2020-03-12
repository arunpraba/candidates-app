import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postComment } from '../redux/applications/applicationAction';

/**
 *Right now there is way to access data so implemented helper function
 * */
const getComment = (comments, aId, qId) =>
  comments.filter(
    comment => comment.applicationId === aId && comment.questionId === qId
  );

const Comment = ({ applicationId, questionId }) => {
  const dispatch = useDispatch();
  const commentsList = useSelector(state => state.application.comments);
  const comments = getComment(commentsList, applicationId, questionId);
  const [comment, setComment] = useState('');

  const saveComment = e => {
    e.preventDefault();
    dispatch(
      postComment({
        questionId,
        applicationId,
        comment
      })
    );
  };

  return (
    <div>
      {comments.length ? (
        <div className="comments">
          <span> Comments:</span>
          {comments.map(({ id, comment }) => (
            <div key={id} className="comment-item">
              {comment}
            </div>
          ))}
        </div>
      ) : (
        <form onSubmit={saveComment} className="comment">
          <textarea
            placeholder="Please provide comment"
            onChange={e => setComment(e.target.value)}
          ></textarea>
          {comment && <button type="submit">save</button>}
        </form>
      )}
    </div>
  );
};

export default Comment;
