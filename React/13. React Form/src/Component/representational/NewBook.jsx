import React, { Component } from "react";

class NewBook extends Component {
	constructor(props) {
		super(props);
    this.bookName = React.createRef();
    this.writer = React.createRef();
    this.description = React.createRef();

    this.handelSubmit= this.handelSubmit.bind(this);

	
  }



	handelSubmit = (e) => {
		// prevent the form submit loading...
		
		console.log(this.bookName.current.value);
		console.log(this.writer.current.value);
		console.log(this.description.current.value);
    e.preventDefault();
	};



	render() {
		return (
			<div>
				<h1>NewBook</h1>
				<form onSubmit={this.handelSubmit}>
					<label>Book Name</label>
					<br />
					<input
						type="text"
						name="bookName"
            ref={this.bookName}
					
					/>
					<br />
					<label>Writer</label>
					<br />
					<input
						type="text"
						name="writer"
            ref={this.writer}
						
					/>
					<br />
					<label>Describtion</label>
					<br />
					<textarea
						type="text"
						name="description"
            ref={this.description}
						
					/>
					<br />
					<input type="submit" />
				</form>
			</div>
		);
	}
}

export default NewBook;
