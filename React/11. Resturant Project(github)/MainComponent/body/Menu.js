import React, { useState } from "react";
import MenuItem from "./MenuItem";
import DISHES from "../../data/dishes";
import DishDetail from "./DishDetail";

function Menu() {
	const [dishes] = useState(DISHES); //destructing 

	// varidable.array [getter(variable), setter(function) -> those default function] = useState(hooks, initiallly null , but when dish items click then pass dish.id )
	const [selectedDish, setSelectedDish] = useState(null);

	//this function pass the selected id into -> selectedDish. & pass this function to the menuItem
	const onSelected = (dish) => {
		// console.log(dish); // check the dish passing or not .
		setSelectedDish(dish); // call the setter() and set those value .
	};

	const menu = dishes.map((dish) => {
		return <MenuItem dish={dish} key={dish.id} onSelected={onSelected} />; //pass the event onClick handler to the MenuItem
	});
	
	//show indevisual dish and comments :
	const dishDetail = selectedDish? <DishDetail selectedDish={selectedDish}/> : null;
	return (
		<div className="Container">
			<div className="row">
				<div className="col-5">{menu}</div>
				<div className="col-7">{dishDetail}</div>
			</div>
		</div>
	);
}

export default Menu;
