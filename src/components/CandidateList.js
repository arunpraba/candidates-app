import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCandidates, clearError } from '../redux/candidates/candidateAction';
import CandidateCard from './CandidateCard';
import ShowError from './Error';
import Loader from './Loader';

const CandidateList = () => {
  const dispatch = useDispatch();
  const candidates = useSelector(state => state.candidate.candidates);
  const error = useSelector(state => state.candidate.error);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      await dispatch(getCandidates());
      setLoading(false);
    };
    getData();
  }, [dispatch]);

  return (
    <div className="card-list">
      <Loader isLoading={loading} />
      <ShowError error={error} close={() => dispatch(clearError())} />
      {candidates.map(candidate => (
        <CandidateCard key={candidate.id} candidate={candidate} />
      ))}
    </div>
  );
};

export default CandidateList;
