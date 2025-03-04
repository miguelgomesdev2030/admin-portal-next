import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Default styles
import "./styles/datepicker.css"; // Import custom styles

interface CustomDatePickerProps {
  disabled?: boolean;
  date?: Date;
  onChange?: (date: Date | null) => void;
  minDate?: Date;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  disabled = false,
  date = new Date(),
  onChange,
  minDate = new Date(),
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    if (onChange) {
      onChange(date); // Pass the new date up to the parent
    }
  };

  return (
    <div className="custom-datepicker">
      <DatePicker
        date={date}
        disabled={disabled}
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd"
        minDate={minDate}
        maxDate={new Date(2026, 11, 31)}
        placeholderText="Pick a date"
        className="custom-input" // Custom input class
      />
    </div>
  );
};

export default CustomDatePicker;
