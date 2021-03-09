import React from 'react';
import JTimepicker from 'reactjs-timepicker'

const TimePickerSecond = () => {
    return (
      <div>
        <JTimepicker
            onChange={console.log}
        />
      </div>
    );
}

export default TimePickerSecond;