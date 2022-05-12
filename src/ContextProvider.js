import React from "react";

export const Context = React.createContext();

const ContextProvider = ({ children }) => {
	const NAME = "react-getter-setter-data";
	const [data, setData] = React.useState(
		localStorage.getItem(NAME) ? JSON.parse(localStorage.getItem(NAME)) : {}
	);

	const setValueLocal = (key, value) => {
		const newData = {};
		newData[key] = value;
		setData({
			...data,
			...newData,
		});
	};

	const removeValueLocal = (key) => {
		const allKeys = Object.keys(data);
		const newData = {};
		allKeys.forEach((thiskey) => {
			if (thiskey !== key) {
				newData[thiskey] = data[thiskey];
			}
		});
		setData(newData);
	};

	const getValue = (key) => {
		if (data[key]) {
			return data[key];
		}
		if (localStorage.getItem(key)) {
			return JSON.parse(localStorage.getItem(key));
		}
	};

	const setValue = (key, value) => {
		setValueLocal(key, value);
		localStorage.setItem(key, JSON.stringify(value));
	};

	const removeValue = (key) => {
		removeValueLocal(key);
		localStorage.removeItem(key);
	};

	const removeAllValues = () => {
		setData({});
		localStorage.clear();
	};

	return (
		<Context.Provider
			value={{ getValue, setValue, removeValue, removeAllValues }}
		>
			{children}
		</Context.Provider>
	);
};
export default ContextProvider;
