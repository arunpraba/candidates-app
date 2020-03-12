import React from 'react';
import { useHistory } from 'react-router-dom';

const CandidateCard = ({ candidate: { id, name, applicationId } }) => {
  const history = useHistory();

  const showUser = () => {
    history.push({
      pathname: `/user/${id}`,
      state: { applicationId, userName: name }
    });
  };

  return (
    <div className="candidate-card" onClick={showUser}>
      <div className="candidate-name">{name}</div>
      <button className={applicationId ? 'btn available' : 'btn unavailable'}>
        {applicationId ? 'Application Available' : 'Application Unavailable'}
      </button>
    </div>
  );
};

export default CandidateCard;
