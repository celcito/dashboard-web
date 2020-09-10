import React from 'react';
import { DatePicker, Space } from 'antd';

const { RangePicker } = DatePicker;

function DateRange(props) {
    return (
    <Space direction="vertical" size={12}>
        <RangePicker showTime />
    </Space>
    );
}

export default DateRange;