import { useState } from "react";

export const useDecrementTime = (timeInSec) => {
    const [decrementTime, setDecrementTime] = useState(timeInSec);

    return [
        decrementTime,
        () =>
            setDecrementTime((curTime) =>
                curTime === 0 ? curTime : (curTime -= 1)
            ),
    ];
};

export const calculateMinutes = (timeInSecs) => Math.floor(timeInSecs / 60);

export const calculateSeconds = (timeInSecs) =>
    timeInSecs - calculateMinutes(timeInSecs) * 60;
