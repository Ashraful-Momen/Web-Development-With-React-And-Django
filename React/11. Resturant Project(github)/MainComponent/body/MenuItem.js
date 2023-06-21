import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

function MenuItem({ dish, onSelected }) {
	// console.log(props.dish);
	return (
		<div>
			<Card inverse style={{margin:"10px", padding:"10px"}} onClick={()=>onSelected(dish)}> 
				<CardImg
					alt={dish.name}
					src={dish.image}
					style={{
						height: 270,
						opacity:0.7,
					}}
					width="100%"
				/>
				<CardImgOverlay >
					<CardTitle tag="h5" style={{fontSize:"40px", fontWeight:"40px", color:"black"}}>{dish.name}</CardTitle>
				</CardImgOverlay>
			</Card>
		</div>
	);
}

export default MenuItem;
