import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import VideoCard from './VideoCard';
import {
  getApplications,
  removeApplications,
  getVideoComments
} from '../redux/applications/applicationAction';
import { getQuestions } from '../redux/questions/questionAction';

const UserDetail = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const applications = useSelector(state => state.application.applications);
  const { applicationId, userName } = location.state;

  useEffect(() => {
    if (applicationId) {
      dispatch(getApplications(applicationId));
      dispatch(getQuestions());
      dispatch(getVideoComments());
    } else {
      dispatch(removeApplications());
    }
  }, [applicationId, dispatch]);

  return (
    <div className="user-detail">
      <h1 className="name">{userName}</h1>
      {applications ? (
        <div className="video-card-list">
          {applications.videos.map(video => (
            <VideoCard
              key={video.questionId}
              video={video}
              applicationId={applicationId}
            />
          ))}
        </div>
      ) : (
        <h1 style={{ textAlign: 'center' }}>No data available</h1>
      )}
    </div>
  );
};

export default UserDetail;
