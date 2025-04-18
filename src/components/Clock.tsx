import { useEffect, useState } from "react";

type ClockProps = {
  className?: string;
};

const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const formatTime = (date: Date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const day = date.getDate();

  const month = MONTH_NAMES[date.getMonth()];

  return `${hours}:${minutes < 10 ? "0" + minutes : minutes} ${day} ${month}`;
};

export function Clock({ className = "" }: ClockProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`rounded-lg bg-gray-100 p-4 text-center shadow-md ${className}`}
    >
      <h2 className="text-2xl font-semibold text-gray-800">
        {formatTime(time)}
      </h2>
    </div>
  );
}
