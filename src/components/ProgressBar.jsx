import React from "react";

function ProgressBar({ percentage }) {
  return (
    <div className="pbar-container">
      <div id="progress-bar" style={{ width: percentage }} />
    </div>
  );
}

export default ProgressBar;
