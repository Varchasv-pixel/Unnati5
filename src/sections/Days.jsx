import React from 'react';
import './Days.css';

function Days() {
  return (
    <div>
      <div className="container">
        <div className="main-text">
          <span className="no-wrap-line">
            Days full of meetings 
            <span className="icon-wrapper">
              <img src="https://whimsical.com/_next/static/media/calendar@2x.5dfa0412.png" alt="Calendar"/>
            </span>, constant
          </span>
          <br/>
          <span className="no-wrap-line">
            interruptions from chat apps 
            <span className="icon-wrapper">
              <img src="https://whimsical.com/_next/static/media/slack@2x.4c34c27f.png" alt="Slack"/>
            </span>, and small
          </span>
          <br/>
          <span className="no-wrap-line">
            gaps of time 
            <span className="icon-wrapper">
              <img src="https://whimsical.com/_next/static/media/clock@2x.83a6a7d4.png" alt="Clock"/>
            </span> to focus have become the
          </span>
          <br/>
          <span className="no-wrap-line">
            status quo. There's a better way. Reclaim
          </span>
          <br/>
          <span className="no-wrap-line">
            your time to unlock new levels of
          </span>
          <br/>
          <span className="no-wrap-line">
            productivity and calm at work.
          </span>
        </div>
        <a href="#" className="cta-link">
          Learn the Whimsical Way 
          <span className="icon-wrapper last-wrapper">
            <img className="last-icon" src="https://whimsical.com/_next/static/media/macos-icon@2x.2fd60649.webp" alt="Whimsical"/>
          </span>
        </a>
      </div>
    </div>
  );
}

export default Days;
