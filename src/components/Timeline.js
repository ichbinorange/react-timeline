import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  
  return (
    props.events.map((evt, i) => {
      return (
        <div className="timeline" key={i}>
          <TimelineEvent 
            person={evt.person}
            status={evt.status}
            timeStamp={evt.timeStamp} />
        </div>
      )
    })
  );
}

export default Timeline;