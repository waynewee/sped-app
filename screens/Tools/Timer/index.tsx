import React, { useEffect, useState } from "react";
import { Text } from "react-native";

export const Timer = () => {
  const [timerCount, setTimer] = useState(60);

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer((lastTimerCount) => {
        lastTimerCount <= 1 && clearInterval(interval);
        return lastTimerCount - 1;
      });
    }, 1000); //each count lasts for a second
    //cleanup the interval on complete
    return () => clearInterval(interval);
  }, []);

  return <Text>{timerCount}</Text>;
};
