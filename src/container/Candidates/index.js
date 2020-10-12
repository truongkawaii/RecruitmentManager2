import React, { useState, useRef } from 'react';

function Candidate() {
  const [state, setState] = useState({ file: null, imagePreviewUrl: null });
  const refs = useRef();

  return (
    <div>
      <div>{/* Only show first image, for now. */}HI Candidates</div>
    </div>
  );
}

export default Candidate;
