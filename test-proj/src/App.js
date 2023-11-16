import { useEffect } from "react";
import { useForm } from "./useForm";
const App = () => {
    const [values, handleChange] = useForm({
        email: "",
        password: "",
        firstName: "",
    });

    useEffect(() => {
        console.log("render");
    }, [values.firstName, values.password]);

    return (
        <div>
            <>
                <input
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                />
                <input
                    name="firstName"
                    placeholder="first name"
                    value={values.firstName}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                />
            </>
        </div>
    );
};

export default App;
