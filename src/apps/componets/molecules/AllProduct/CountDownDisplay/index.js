import { memo, useEffect, useState } from "react";

const CountdownDisplay = () => {
  const [seconds, setSeconds] = useState(8*60*60);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        const newSeconds = prevSeconds - 1;
        if (newSeconds < 0) {
          clearInterval(interval);
          return 0;
        }

        return newSeconds;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  return (
    <div className="flex">
      <div className="ml-auto">
        <span className="text-white text-base font-medium mr-2">
          Nhanh tay chỉ còn
        </span>
      </div>
      <div className="text-base text-white font-bold">
        <span className="bg-red-600 px-4 py-1 rounded-md mx-1">
          {String(hours).padStart(2, "0")}
        </span>
        :
        <span className="bg-red-600 px-4 py-1 rounded-md mx-1">
          {String(minutes).padStart(2, "0")}
        </span>
        :
        <span className="bg-red-600 px-4 py-1 rounded-md mx-1">
          {String(remainingSeconds).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
};

export default memo(CountdownDisplay)