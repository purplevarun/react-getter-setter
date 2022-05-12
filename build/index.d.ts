/**
 * Wrap This Around Your Entire React App to use Getters and Setters
 * */
declare const GetterSetterWrapper: () => React.FC;

/**
 * Returns four functions :
 * getValue
 * setValue
 * removeValue
 * removeAllValues
 * */
declare const useValue: () => {
	/**
	 * This function is used to get a globally stored variable
	 */
	getValue: (key: string) => any;

	/**
	 * This function is used to set a global variable
	 */
	setValue: (key: string, value: any) => void;

	/**
	 * This function is used to delete a global variable
	 */
	removeValue: (key: string) => void;

	/**
	 * This function is used to delete all values
	 */
	removeAllValues: (key: string) => void;
};

export { GetterSetterWrapper, useValue };
