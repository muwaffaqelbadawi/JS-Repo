import "../Polishing/HomeUI.css";

export const HomeUI = (props) => {
    let className = props.primary ? "primary" : " ";
    return (
        <div>
            <h1 className={`${className} font-xl`}>Home UI</h1>
        </div>
    );
};
