// let CurrentTime = () => {
//   let time = new Date();

//   return (
//     <p className="text-center fs-4">
//       Date: {time.toLocaleDateString()} <br />
//       Time: {time.toLocaleTimeString()}
//     </p>
//   );
// };

// export default CurrentTime;
import { useEffect, useState } from "react";

let CurrentTime = () => {
  const [timeData, setTimeData] = useState({
    date: "",
    time: "",
    daysPassed: 0,
    daysLeft: 0,
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      // Date and Time
      const date = now.toLocaleDateString();
      const time = now.toLocaleTimeString();

      // Year status
      const year = now.getFullYear();
      const start = new Date(year, 0, 1);
      const end = new Date(year, 11, 31);
      const totalDays = Math.floor((end - start) / (1000 * 60 * 60 * 24)) + 1;

      const daysPassed = Math.floor((now - start) / (1000 * 60 * 60 * 24));
      const daysLeft = totalDays - daysPassed;

      setTimeData({
        date,
        time,
        daysPassed,
        daysLeft,
      });
    };

    // First call
    updateTime();

    // Update every second
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p className="time-line">
        <b>Date & Time: </b> {timeData.date} — {timeData.time}
      </p>

      <p className="time-line">
        <b>Year Progress: </b> {timeData.daysPassed} days passed —{" "}
        {timeData.daysLeft} days left Including Today
      </p>
    </div>
  );
};

export default CurrentTime;
