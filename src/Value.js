import { useContext } from "react";
import { Context } from "./ContextProvider";

const Value = () => {
	const { getValue, setValue, removeValue } = useContext(Context);
	return { getValue, setValue, removeValue };
};

export default Value;
