import { useValue } from "react-getter-setter";
import { useState } from "react";

function App() {
	const [text, setText] = useState("");
	const { getValue, setValue, removeValue } = useValue();
	return (
		<div className="App">
			<input
				type="text"
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>

			<button onClick={() => setValue("name", text)}>Change Name</button>

			<button onClick={() => removeValue("name")}>Delete Name</button>

			<h1>Name = {getValue("name")}</h1>
		</div>
	);
}

export default App;
