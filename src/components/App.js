import React from "react";
import Nav from "./Nav";
import Buttons from "./Buttons";
import hogs from "../porkers_data";

function App() {

	return (
		<div className="App">
			<Nav />
			<br/><br/>
			<Buttons data={hogs} />
		</div>
	);
}

export default App;
