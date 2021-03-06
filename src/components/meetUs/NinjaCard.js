import React from "react";
import "./ninja-card.css";

export const NinjaCard = (props) => {
  return (
    <div className="ninja-card">
      {props.imgUrl != null ? (
        <img className="ninja-avatar" src={props.imgUrl} alt="ninja-avatar" />
      ) : (
        <img className="default-avatar" alt="default-img" />
      )}
      <div className="ninja-info-main">
        <div className="ninja-info">
          <div className="info-body">
            <p>{props.name}</p>
            <p>
              <span>
                <b>Office: </b>
              </span>
              {props.office}
            </p>
          </div>
        </div>
        <div className="ninja-social">
          <div className="social-icons">
            {props.gitHub && (
              <a className="github" href={`https://github.com/${props.gitHub}`}>
                <i className="github-icon" />
              </a>
            )}
            {
              <a
                className="linkedin"
                href={`https://linkedin.com/in/${props.linkedIn}`}
              >
                <i className="linkedin-icon" />
              </a>
            }
            {
              <a
                className="twitter"
                href={`https://twitter.com/${props.twitter}`}
              >
                <i className="twitter-icon" />
              </a>
            }
          </div>
        </div>
      </div>
    </div>
  );
};
