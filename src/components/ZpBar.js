import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ZpBar() {
  
  const percentage = 73
  return (
    <div className="progressBar">
      <h3>React Bootstrap Progress Bar Demo</h3>
       <ProgressBar now={percentage} label={`${percentage}% completed`} />
    </div>
  );
}
