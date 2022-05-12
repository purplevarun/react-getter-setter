/**
 * Wrap This Around Your Entire React App to use Getters and Setters
 * */
declare const GetterSetterWrapper: () => React.FC;

/**
 * Returns two functions : getValue and setValue
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
};

export { GetterSetterWrapper, useValue };
