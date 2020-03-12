import React from 'react';
import { useSelector } from 'react-redux';
import Comment from './Comment';

const VideoCard = ({ video, applicationId }) => {
  const questions = useSelector(state => state.question.questions);

  return (
    video && (
      <div className="video-card">
        <video className="video" controls>
          <source src={video.src} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div className="question">
          Q: {questions && questions[video.questionId]}?
        </div>
        <Comment
          video={video}
          applicationId={applicationId}
          questionId={video.questionId}
        />
      </div>
    )
  );
};

export default VideoCard;
