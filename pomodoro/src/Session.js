import { useEffect } from "react";
import { useTimer } from "./useTimer";

const Session = () => {
    const initState = false;
    const initTime = 1500;

    const [
        /* declaration of hooks dependencies */
        sessionStart,
        setSessionStart,

        sessionTime,
        setSessionTime,

        buttonLabel,
        setButtonLabel,

        currentTime,
    ] = useTimer(initState, initTime);

    useEffect(() => {
        setButtonLabel("Start");
        if (sessionStart) {
            const sessionInterval = setInterval(() => {
                setSessionTime();
            }, 1000);

            currentTime === 0
                ? setButtonLabel("Reset")
                : setButtonLabel("Pause");

            return () => {
                clearInterval(sessionInterval);
            };
        }
    }, [
        /* include hooks dependencies same as above */
        sessionStart,
        setSessionStart,

        sessionTime,
        setSessionTime,

        buttonLabel,
        setButtonLabel,

        currentTime,
    ]);

    return (
        <div>
            Session timer: {sessionTime.minutes}:{sessionTime.seconds}
            <br />
            <button onClick={setSessionStart}>{buttonLabel}</button>
        </div>
    );
};

export default Session;
