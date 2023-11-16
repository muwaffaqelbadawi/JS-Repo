// import Session from "./Session";
// import BreakTimer from "./BreakTimer";

import { HomeUI } from "./Home Page/HomeUI";
import { Inline } from "./Home Page/inline";
import "./Polishing/styleSheet.css";
import styles from "./Polishing/styleSheet.module.css";

const App = () => {
    return (
        <div>
            <h1 className="error">Error</h1>
            <h1 className={styles.success}>Success</h1>
        </div>
    );
};

export default App;
