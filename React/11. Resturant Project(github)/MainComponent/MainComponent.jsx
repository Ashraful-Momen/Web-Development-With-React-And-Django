import React from "react";
import HeaderComponent from "./header/HeaderComponent";

import FooterComponent from "./footer/FooterComponent";
import BodyComponent from "./body/BodyComponent";

const MainComponent = () => {
	return (
		<div>
			<HeaderComponent />

			<BodyComponent />

			<FooterComponent />
		</div>
	);
};

export default MainComponent;
