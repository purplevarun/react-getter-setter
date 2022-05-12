import React from "react";
import { Context } from "./ContextProvider";

const Value = () => {
	const { getValue, setValue, removeValue, removeAllValues } =
		React.useContext(Context);
	return { getValue, setValue, removeValue, removeAllValues };
};

export default Value;
