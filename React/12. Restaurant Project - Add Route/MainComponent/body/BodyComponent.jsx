import React from "react";

import { Routes,Route } from "react-router-dom";
import Menu from "./Menu"
import Contact from "./Contact";
import About from "./About";


function BodyComponent() {
	return (
		<div>
			<Routes>
				<Route path="/" element=""> Home </Route>
				<Route path="/menu" element={<Menu/>}> Menu </Route>
				<Route path="/about" element={<About/>}> About </Route>
				<Route path="/contact" element={<Contact/>}> Contact </Route>
			</Routes>	
		</div>
	);
}

export default BodyComponent;
