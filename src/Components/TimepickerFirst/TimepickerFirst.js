import React, { useState } from 'react';
import TimePicker from 'react-time-picker';

const TimePickerFirst = () => {
  const [value, onChange] = useState('10:00');
    return (
      <div>
        <TimePicker
          onChange={onChange}
          value={value}
        />
      </div>
    );
}

export default TimePickerFirst;