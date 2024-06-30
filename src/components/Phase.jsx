// components/Phase.js

import PropTypes from "prop-types";

const Phase = ({ phase, title, description, completed }) => {
  return (
    <div className={`timeline pt-3 ${phase % 2 === 0 ? "right" : "left"}`}>
      <div className={`card ${completed ? "bg-nature" : "bg-info-subtle"}`}>
        <div className="card-body text-center p-4">
          <h2 className="fw-medium">{title}</h2>
          <p>{description} {completed && (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
            </svg>
          )}
          </p>
        </div>
      </div>
    </div>
  );
};

Phase.propTypes = {
  phase: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default Phase;
