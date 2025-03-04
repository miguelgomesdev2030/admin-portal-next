import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Default styles
import "./styles/datepicker.css"; // Import custom styles
import { FaTrash } from "react-icons/fa6";

interface TimeSlotProps {
  disabled?: boolean;
  onChange?: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  value?: string;
}

const TimeSlot: React.FC<TimeSlotProps> = ({
  disabled = false,
  minDate = new Date(),
  onChange,
  value,
  maxDate = new Date("2026-12-31"),
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(minDate);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    if (onChange) {
      if (date) {
        onChange(date); // Pass the new date up to the parent
      }
    }
  };

  return (
    <div className="custom-datepicker">
      <DatePicker
        value={value}
        disabled={disabled}
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd HH:mm"
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15} // Time selection every 15 minutes
        minDate={minDate}
        maxDate={maxDate}
        placeholderText="Pick a date and time"
        className="custom-input" // Custom input class
      />
    </div>
  );
};

export default TimeSlot;
