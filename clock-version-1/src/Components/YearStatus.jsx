import { useState, useEffect } from "react";

let CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000); // 1 second update

    return () => clearInterval(timer);
  }, []);

  return (
    <p className="fs-4 text-center mt-3">
      <strong>Date:</strong> {time.toLocaleDateString()} <br />
      <strong>Time:</strong> {time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;
