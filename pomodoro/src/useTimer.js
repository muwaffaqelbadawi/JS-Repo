import { useState } from "react";
import {
    useDecrementTime,
    calculateMinutes,
    calculateSeconds,
} from "./calculateTime";

export const useTimer = (initState, initTime) => {
    const [eventState, setEventState] = useState(initState);

    const [eventTime, setEventTime] = useState({
        minutes: calculateMinutes(initTime),
        seconds: calculateSeconds(initTime),
    });

    const [eventButton, setEventButton] = useState("");

    /* custome hook */
    const [decrementTime, setDecrementTime] = useDecrementTime(initTime);
    /* custome hook */

    return [
        eventState,
        () => setEventState((curState) => !curState),

        eventTime,
        () => {
            setDecrementTime();
            setEventTime({
                minutes: calculateMinutes(decrementTime),
                seconds: calculateSeconds(decrementTime),
            });
        },

        eventButton,
        (label) => setEventButton(label),

        /* custome hook */
        decrementTime, // current time
        /* custome hook */
    ];
};
