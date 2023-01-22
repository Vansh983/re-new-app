import React, {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import { Text, View } from "react-native";

const Timer = forwardRef((props, ref) => {
  // For Total seconds
  const [timeStamp, setTimeStamp] = useState(
    props.timestamp ? props.timestamp : 0
  );
  // Delay Required
  const [delay, setDelay] = useState(props.delay ? props.delay : 1000);

  // Flag for informing parent component when timer is over
  const [sendOnce, setSendOnce] = useState(true);

  // Flag for final display time format
  const [finalDisplayTime, setFinalDisplayTime] = useState("");

  useInterval(() => {
    if (timeStamp > 0) {
      setTimeStamp(timeStamp - 1);
    } else if (sendOnce) {
      if (props.timerCallback) {
        props.timerCallback(true);
      } else {
        console.log("Please pass a callback function...");
      }
      setSendOnce(false);
    }
    setFinalDisplayTime(secondsToDhms(timeStamp));
  }, delay);

  function secondsToDhms(seconds) {
    seconds = Number(seconds);
    var d = Math.floor(seconds / (3600 * 24));
    var h = Math.floor((seconds % (3600 * 24)) / 3600);
    var m = Math.floor((seconds % 3600) / 60);
    var s = Math.floor(seconds % 60);

    var dDisplay = d > 0 ? d + "d " : "";
    var hDisplay = h > 0 ? h + "h " : "";
    var mDisplay = m > 0 ? m + "m " : "";
    var sDisplay = s > 0 ? s + "s " : "";
    return dDisplay + hDisplay + mDisplay + sDisplay;
  }

  const refTimer = useRef();
  useImperativeHandle(ref, () => ({
    resetTimer: () => {
      // Clearing days, hours, minutes and seconds
      // Clearing Timestamp
      setTimeStamp(props.timestamp);
      setSendOnce(true);
    },
  }));

  return (
    <View ref={refTimer} style={props.containerStyle}>
      <Text style={props.textStyle}>{sendOnce ? finalDisplayTime : "0"}</Text>
    </View>
  );
});

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => {
        clearInterval(id);
      };
    }
  }, [delay]);
}

export default Timer;
