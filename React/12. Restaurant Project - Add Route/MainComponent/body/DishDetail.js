import React from "react";
import {
	Card,
	CardImg,
	CardImgOverlay,
	CardText,
	CardTitle,
	CardBody,
} from "reactstrap";
import LoadComponent from "./LoadComponent";

const DishDetail = ({ selectedDish }) => {
	// console.log(selectedDish);
	const dish = selectedDish;
	// console.log(dish.comments);
	

	return (
		<div>
			<Card inverse style={{ margin: "10px", padding: "10px" }}>
				<CardImg
					alt={dish.name}
					src={dish.image}
					style={{
						height: 270,
					}}
					width="100%"
				/>
				<CardImgOverlay>
					<CardTitle
						tag="h5"
						style={{ fontSize: "40px", fontWeight: "40px", color: "black" }}
					>
						{/* {dish.name} */}
					</CardTitle>
				</CardImgOverlay>

				<CardBody>
					<CardTitle tag="h3" className="text-lg , text-dark">
						{dish.name}
					</CardTitle>
					<CardText tag="b" className="text-md, text-dark">
						{dish.description}
					</CardText>
					<CardText className="text-dark">Price:{dish.price}$</CardText>
					<CardText>
						<small className="text-muted">Last updated 3 mins ago</small>
					</CardText>
					<CardText>
						
					</CardText>
					
					<LoadComponent  comments={dish.comments} />
					
				</CardBody>
			</Card>
		</div>
	);
};

export default DishDetail;
