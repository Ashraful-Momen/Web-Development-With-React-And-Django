import React, { Component } from "react";
import { Form, FormGroup, Button, Col, Input, Label } from "reactstrap";

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstname: "",
			lastname: "",
			telnum: "",
			email: "",
			agree: false, // for the checkbox.
			contactType: "Tel.",
			message: "",
		};

    this.handelInputChange = this.handelInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}

  handelInputChange = (event) => {
      const value = event.target.type === 'checkbox'? event.target.checked : event.target.value;
      const name = event.target.name;
      this.setState({
        [name]: value,
      })
  }

  handleSubmit = (event)=>{
    event.preventDefault();
    console.log(this.state);
  }

	render() {
		return (
			<div className="Container">
				<div className="row row-content" style={{paddingLeft:"20px", textAlign:"left"}}>
					<div className="col-12">
						<h3>Send US your FeedBack!</h3>
					</div>
					<div className="col-12 col-md-7">
						<Form onSubmit={this.handleSubmit}>
							<FormGroup row>
								<Label htmlFor="firstname" md={2}>
									First Name
								</Label>
								<Col md={10}>
									<Input
										type="text"
										name="firstname"
										value={this.state.firstname}
										placeholder="First Name"
                    onChange={this.handelInputChange}

									/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label htmlFor="lastname" md={2}>
									Last Name
								</Label>
								<Col md={10}>
									<Input
										type="text"
										name="lastname"
										value={this.state.lastname}
										placeholder="Last Name"
                    onChange={this.handelInputChange}
									/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label htmlFor="telnum" md={2}>
									Contact Tel.
								</Label>
								<Col md={10}>
									<Input
										type="tel"
										name="telnum"
										value={this.state.telnum}
										placeholder="Telephone Number"
                    onChange={this.handelInputChange}
									/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label htmlFor="email" md={2}>
									Email
								</Label>
								<Col md={10}>
									<Input
										type="email"
										name="email"
										value={this.state.email}
										placeholder="Email"
                    onChange={this.handelInputChange}
									/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Col md={{ size: 6, offset: 2 }}>
									<FormGroup check>
										<Label check>
											<Input
												type="checkbox"
												name="agree"
												checked={this.state.agree}
												// onChange={(e) =>
												// 	this.setState({ agree: e.target.checked })
												// }
                        onChange={this.handelInputChange}
											/>
											May We Contact You?
										</Label>
									</FormGroup>
								</Col>
								<Col md={{ size: 3, offset: 1 }}>
									<Input
										type="select"
										name="contactType"
										value={this.state.contactType}
										// onChange={(e) =>
										// 	this.setState({ contactType: e.target.value })
										// }
                    onChange={this.handelInputChange}
									>
										<option>Tel.</option>
										<option>Email</option>
									</Input>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label htmlFor="message" md={2}>
									Your Feedback
								</Label>
								<Col md={10}>
									<Input
										type="textarea"
										name="message"
										value={this.state.message}
										rows="12"
										// onChange={(e) => this.setState({ message: e.target.value })}
                    onChange={this.handelInputChange}
									/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Col md={{ size: 10, offset: 2 }}>
									<Button type="submit" color="primary">
										Send
									</Button>
								</Col>
							</FormGroup>
						</Form>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;
