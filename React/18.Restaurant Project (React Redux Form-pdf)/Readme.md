# Restaurant Contact System - React Redux Form

A React application for restaurant customer feedback and contact management using react-redux-form library with Redux state management, form validation, and customer communication features.

## Project Overview

This restaurant application implements a comprehensive contact and feedback system allowing customers to send inquiries, provide feedback, and communicate with the restaurant management. The system uses React Redux Form for robust form state management and validation.

## Features

### 🍽️ Restaurant Contact Features
- **Customer Feedback:** Multi-line message system for restaurant reviews and suggestions
- **Contact Information:** Complete customer details collection (name, phone, email)
- **Communication Preferences:** Customer contact permission and preferred contact method
- **Reservation Inquiries:** Contact form for table bookings and special requests
- **Form Validation:** Real-time validation for customer data integrity

### 📝 Form Management
- **React Redux Form Integration:** Complete form state management through Redux
- **Form Validation:** Client-side validation with custom validators
- **Dynamic Form Controls:** Text inputs, checkboxes, select dropdowns, and textareas
- **Real-time Error Display:** Instant validation feedback with error messages
- **Form Reset Functionality:** Clear form data after successful submission

### 🎨 User Interface
- **Reactstrap Integration:** Bootstrap-styled form components for professional appearance
- **FontAwesome Icons:** Enhanced UI with restaurant-appropriate icons
- **Responsive Design:** Mobile-friendly form layout for all devices
- **Accessibility:** Proper labeling and form structure for all customers

## Technologies Used

- **Framework:** React
- **State Management:** Redux with react-redux-form
- **UI Library:** Reactstrap (Bootstrap for React)
- **Icons:** FontAwesome React components
- **Validation:** Custom validation functions
- **Form Controls:** react-redux-form Control components

## Installation & Setup

### Prerequisites
- Node.js 14+
- npm or yarn package manager

### 1. Install Dependencies

#### Core Dependencies
```bash
npm install react redux react-redux
npm install reactstrap bootstrap
```

#### React Redux Form (with legacy peer deps fix)
```bash
# Fix peer dependency conflicts
npm config set legacy-peer-deps true

# Install react-redux-form
npm install react-redux-form --save
```

#### FontAwesome Icons
```bash
npm install @fortawesome/react-fontawesome@latest
npm install @fortawesome/fontawesome-svg-core
```

### 2. Project Structure
```
src/
├── components/
│   ├── Contact.jsx
│   ├── Restaurant/
│   └── Menu/
├── redux/
│   ├── reducer.js
│   ├── form.js
│   ├── actionType.js
│   └── store.js
├── data/
│   ├── DISHES.js
│   └── COMMENTS.js
└── App.js
```

### 3. Start Development Server
```bash
npm start
```

## Configuration

### Redux Store Setup

#### Restaurant Contact Form State (`src/redux/form.js`)
```javascript
export const InitialContactForm = {
    firstname: "",
    lastname: "",
    telnum: "",
    email: "",
    agree: false,
    contactType: "Tel.",
    message: "",
}
```

#### Reducer Configuration (`src/redux/reducer.js`)
```javascript
import { combineReducers } from "redux";
import { createForms } from "react-redux-form";
import { InitialContactForm } from "./form";
import COMMENTS from "../data/COMMENTS";

const dishReducer = (dishState = {isLoading: false, dishes: []}, action) => {
    switch(action.type) {
        case actionType.DISHES_LOADING:
            return {
                ...dishState,
                isLoading: true,
                dishes: []
            }
        case actionType.LOAD_DISHES:
            return {
                ...dishState,
                isLoading: false,
                dishes: action.payload
            }
        default:
            return dishState;
    }
}

const commentReducer = (commentState = COMMENTS, action) => {
    switch(action.type) {
        case actionType.ADD_COMMENTS:
            let comment = action.payload;
            comment.id = commentState.length;
            comment.date = new Date().toDateString();
            return commentState.concat(comment);
        default:
            return commentState;
    }
};

export const Reducer = combineReducers({
    dishes: dishReducer,
    comments: commentReducer,
    ...createForms({
        feedback: InitialContactForm, // Restaurant feedback form state
    })
});
```

## Restaurant Contact Form Implementation

### Contact Form Component

#### Complete Implementation
```javascript
import React, { Component } from "react";
import { FormGroup, Button, Col, Label } from "reactstrap";
import { Form, Control, Errors, actions } from "react-redux-form";
import { connect } from "react-redux";

// Restaurant-specific validation
const required = (value) => value && value.length;
const inNumber = (value) => !isNaN(Number(value));
const validEmail = (value) =>
  /^([a-zA-Z0-9_.+-])+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i.test(value);

const mapDispatchToProps = (dispatch) => {
  return {
    resetFeedbackForm: () => {
      dispatch(actions.reset("feedback"));
    },
  };
};

class Contact extends Component {
  handleSubmit = (values) => {
    console.log("Customer feedback received:", values);
    // Process restaurant feedback/contact request
    this.props.resetFeedbackForm();
  };

  render() {
    document.title = "Contact Us - Restaurant";

    return (
      <div className="Container">
        <div className="row row-content" style={{ paddingLeft: "20px", textAlign: "left" }}>
          <div className="col-12">
            <h3>Send Us Your Feedback!</h3>
            <p>We value your opinion and would love to hear from you.</p>
          </div>
          <div className="col-12 col-md-7">
            <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
              {/* Customer Name Fields */}
              <FormGroup row>
                <Label htmlFor="firstname" md={2}>First Name</Label>
                <Col md={10}>
                  <Control.text
                    model=".firstname"
                    id="firstname"
                    name="firstname"
                    placeholder="First Name"
                    className="form-control"
                    validators={{ required }}
                  />
                  <Errors
                    className="text-danger"
                    model=".firstname"
                    show="touched"
                    messages={{ required: "Required" }}
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label htmlFor="lastname" md={2}>Last Name</Label>
                <Col md={10}>
                  <Control.text
                    model=".lastname"
                    id="lastname"
                    name="lastname"
                    placeholder="Last Name"
                    className="form-control"
                    validators={{ required }}
                  />
                  <Errors
                    className="text-danger"
                    model=".lastname"
                    show="touched"
                    messages={{ required: "Required" }}
                  />
                </Col>
              </FormGroup>

              {/* Contact Information */}
              <FormGroup row>
                <Label htmlFor="telnum" md={2}>Phone Number</Label>
                <Col md={10}>
                  <Control.text
                    model=".telnum"
                    id="telnum"
                    name="telnum"
                    placeholder="Telephone Number"
                    className="form-control"
                    validators={{ required, inNumber }}
                  />
                  <Errors
                    className="text-danger"
                    model=".telnum"
                    show="touched"
                    messages={{
                      required: "Required",
                      inNumber: "Invalid Phone Number",
                    }}
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label htmlFor="email" md={2}>Email</Label>
                <Col md={10}>
                  <Control.text
                    model=".email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    validators={{ required, validEmail }}
                  />
                  <Errors
                    className="text-danger"
                    model=".email"
                    show="touched"
                    messages={{
                      required: "Required",
                      validEmail: "Invalid Email Address",
                    }}
                  />
                </Col>
              </FormGroup>

              {/* Communication Preferences */}
              <FormGroup row>
                <Col md={{ size: 6, offset: 2 }}>
                  <FormGroup check>
                    <Label check>
                      <Control.checkbox
                        model=".agree"
                        id="agree"
                        name="agree"
                        className="form-control-input"
                      />{" "}
                      May We Contact You About Special Offers?
                    </Label>
                  </FormGroup>
                </Col>
                <Col md={{ size: 3, offset: 1 }}>
                  <Control.select
                    model=".contactType"
                    id="contactType"
                    name="contactType"
                    className="form-control"
                  >
                    <option>Tel.</option>
                    <option>Email</option>
                  </Control.select>
                </Col>
              </FormGroup>

              {/* Feedback Message */}
              <FormGroup row>
                <Label htmlFor="message" md={2}>Your Feedback</Label>
                <Col md={10}>
                  <Control.textarea
                    model=".message"
                    id="message"
                    name="message"
                    rows="12"
                    placeholder="Share your dining experience, suggestions, or any questions..."
                    className="form-control"
                    validators={{ required }}
                  />
                  <Errors
                    className="text-danger"
                    model=".message"
                    show="touched"
                    messages={{ required: "Please share your feedback" }}
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Send Feedback
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

export default connect(null, mapDispatchToProps)(Contact);
```

## Restaurant Data Integration

### Dishes and Comments Integration
The application integrates with restaurant-specific data:

```javascript
// Dishes reducer for menu management
const dishReducer = (dishState = {isLoading: false, dishes: []}, action) => {
    switch(action.type) {
        case actionType.DISHES_LOADING:
            return { ...dishState, isLoading: true, dishes: [] }
        case actionType.LOAD_DISHES:
            return { ...dishState, isLoading: false, dishes: action.payload }
        default:
            return dishState;
    }
}

// Comments reducer for customer reviews
const commentReducer = (commentState = COMMENTS, action) => {
    switch(action.type) {
        case actionType.ADD_COMMENTS:
            let comment = action.payload;
            comment.id = commentState.length;
            comment.date = new Date().toDateString();
            return commentState.concat(comment);
        default:
            return commentState;
    }
};
```

## Form Validation for Restaurant Context

### Restaurant-Specific Validators
```javascript
// Required field validation for customer information
const required = (value) => value && value.length;

// Phone number validation for reservations
const inNumber = (value) => !isNaN(Number(value));

// Email validation for promotional offers
const validEmail = (value) =>
  /^([a-zA-Z0-9_.+-])+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i.test(value);
```

### Customer Experience Enhancements
```javascript
// Custom messages for restaurant context
const restaurantValidation = {
    required: "This information is required",
    validEmail: "Please provide a valid email for special offers",
    inNumber: "Please provide a valid phone number for reservations"
};
```

## Integration with Restaurant Features

### Menu Integration
```javascript
// Connect contact form with menu data
const mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        feedback: state.feedback
    };
};
```

### Reservation System Integration
```javascript
// Handle reservation requests through contact form
handleSubmit = (values) => {
    if (values.message.toLowerCase().includes('reservation')) {
        // Process as reservation request
        this.processReservation(values);
    } else {
        // Process as general feedback
        this.processFeedback(values);
    }
    this.props.resetFeedbackForm();
};
```

## Restaurant-Specific Use Cases

### Customer Feedback Types
- **Dining Experience Reviews:** Food quality, service, atmosphere
- **Special Dietary Requirements:** Allergies, vegetarian/vegan options
- **Event Planning:** Private parties, catering requests
- **Reservation Modifications:** Table bookings, special occasions
- **Complaint Resolution:** Service issues, order problems

### Business Intelligence
```javascript
// Analyze feedback for business insights
const analyzeFeedback = (feedbackData) => {
    const keywords = {
        positive: ['excellent', 'delicious', 'great service', 'loved'],
        negative: ['disappointed', 'slow service', 'cold food'],
        reservation: ['book', 'reserve', 'table', 'party']
    };
    
    // Categorize feedback for management review
    return categorizedFeedback;
};
```

## Troubleshooting Restaurant App

### Common Restaurant App Issues

#### Menu Data Loading
```javascript
// Ensure dishes load properly
useEffect(() => {
    if (dishes.length === 0 && !isLoading) {
        dispatch(fetchDishes());
    }
}, [dishes, isLoading, dispatch]);
```

#### Customer Data Validation
```javascript
// Restaurant-specific validation for customer data
const validateCustomerInfo = (customerData) => {
    const errors = {};
    
    if (!customerData.firstname) errors.firstname = "First name required for reservation";
    if (!customerData.telnum) errors.telnum = "Phone number required for confirmation";
    if (!validEmail(customerData.email)) errors.email = "Valid email required for updates";
    
    return errors;
};
```

## Deployment for Restaurant

### Production Configuration
```javascript
// Environment-specific settings for restaurant app
const config = {
    development: {
        apiUrl: 'http://localhost:3001/api',
        enableDevTools: true
    },
    production: {
        apiUrl: 'https://restaurant-api.example.com/api',
        enableDevTools: false,
        analytics: true
    }
};
```

### SEO for Restaurant
```javascript
// Restaurant-specific SEO optimization
useEffect(() => {
    document.title = "Contact Us | [Restaurant Name] - Best Dining Experience";
    document.meta.description = "Contact [Restaurant Name] for reservations, feedback, and inquiries. We value your dining experience.";
}, []);
```

## API Integration for Restaurant Backend

### Feedback Submission
```javascript
const submitFeedback = async (feedbackData) => {
    try {
        const response = await fetch('/api/restaurant/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...feedbackData,
                timestamp: new Date().toISOString(),
                type: 'customer_feedback'
            }),
        });
        
        if (response.ok) {
            // Success - maybe send confirmation email
            await sendConfirmationEmail(feedbackData.email);
            return { success: true };
        }
    } catch (error) {
        console.error('Failed to submit feedback:', error);
        return { success: false, error };
    }
};
```

## Documentation Links

- [React Redux Form Documentation](https://davidkpiano.github.io/react-redux-form/docs.html)
- [Reactstrap Components](https://reactstrap.github.io/)
- [Redux Documentation](https://redux.js.org/)
- [FontAwesome React](https://fontawesome.com/docs/web/use-with/react/)

## Contributing

1. Fork the repository
2. Create a feature branch for restaurant enhancements
3. Implement customer experience improvements
4. Add appropriate tests for validation logic
5. Submit a pull request with clear description

## License

This restaurant application is open source and available under the [MIT License](LICENSE).

## Support

For support and questions:
- Check react-redux-form documentation for form handling
- Review restaurant-specific validation patterns
- Test customer feedback flow end-to-end
- Verify integration with menu and reservation systems

---

**Note:** This restaurant application uses react-redux-form which may have compatibility considerations with newer React versions. For new restaurant projects, consider modern alternatives like Formik or React Hook Form while maintaining the customer experience focus.
