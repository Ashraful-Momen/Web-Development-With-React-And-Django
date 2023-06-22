import React, { Component } from "react";
import MenuItem from "./MenuItem";
import DISHES from "../../data/dishes";
import DishDetail from "./DishDetail";
import { Button, CardColumns, Modal, ModalFooter } from "reactstrap";

class Menu extends Component {
	//   constructor(props) {
	//     super(props);
	//     this.state = {
	//       dishes: DISHES,
	//       selectedDish: null
	//     };
	//   }
	state = {
		dishes: DISHES,
		selectedDish: null,
		openModal: false,
	};

	onSelected = (dish) => {
		this.setState({ selectedDish: dish });
		this.setState({
			openModal: true,
		});
	};

	toggleModal = () => {
		this.setState({
			openModal: !this.state.openModal,
		});
	};

	render() {
		// const { dishes, selectedDish } = this.state;

		const menu = this.state.dishes.map((dish) => (
			<MenuItem dish={dish} key={dish.id} onSelected={this.onSelected} />
		));

		const dishDetail = this.state.selectedDish ? (
			<DishDetail selectedDish={this.state.selectedDish} />
		) : null;

		return (
			<div className="Container">
				<div className="row">
					

					<div className="col-5 offset-3">{menu}</div>
          <div className="col-7"><Modal isOpen={this.state.openModal}>{dishDetail}
						<ModalFooter >
							<Button onClick={this.toggleModal} className="btn-outline-warning">Close</Button>
						</ModalFooter>
					</Modal></div>
				</div>
			</div>
		);
	}
}

export default Menu;
