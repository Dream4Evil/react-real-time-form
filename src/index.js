import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Form extends React.Component{
   constructor(props){
   	super(props);
   	this.state = {
   		firstName: "",
   		lastName: "",
   		age: null,
   		gender: "",
   		destination: "",
   		nutsFree: false,
   		lactoseFree: false,
   		vegan: false,
   	};

   	this.handleChange = this.handleChange.bind(this);
   }

   handleChange = (event) => {
   		const name = event.target.name;
   		const value = event.target.value;
   		const type = event.target.type;
   		const checked = event.target.checked;

   		// równoważne z powyższym!
   		// const {name, value, type, checked} = event.target;
	
   	this.setState({
   		[name] : value
   	});

   	type === "checkbox"
   			? this.setState({ [name]: checked })
   			: this.setState({ [name]: value });
   }

   render(){
   	return (
   		<main>
   			<section class="about">
   				<h1>Simple React Form</h1>
   			</section>
	   		<section class="form">
		  		<form>
			        <input class="form__input-text" type="text" name="firstName" placeholder="First name" value={this.state.firstName} onChange={this.handleChange} />
			        <input class="form__input-text" type="text" name="lastName" placeholder="Last name" value={this.state.lastName} onChange={this.handleChange} />
			        <input class="form__input-text" type="number" name="age" placeholder="Age" value={this.state.age} onChange={this.handleChange} />
			        <div>
			        	<h3>Gender</h3>
			        	<div>
				        	<input class="form__input-radio" type="radio" name="gender" value="male" onChange={this.handleChange} />
				        	<label>Male</label>
			        	</div>
			        	<div>
				        	<input class="form__input-radio" type="radio" name="gender" value="female" onChange={this.handleChange} />
				        	<label>Female</label>
				        </div>
			        </div>
			        <h3>Select your destination</h3>
			        <select onChange={this.handleChange} name="destination">
			        	<option value="">Choose Your destination</option>
			        	<option value="Japan">Japan</option>
			        	<option value="Thailand">Thailand</option>
			        	<option value="India">India</option>
			        </select>
			        <h3>Dietary restrictions:</h3>
			        <div>
			        	<div>
			        		<input type="checkbox" name="nutsFree" checked={this.nutsFree} onChange={this.handleChange} />
			        		<span>Nuts free</span>
			        	</div>
			        	<div>
				        	<input type="checkbox" name="lactoseFree" checked={this.lactoseFree} onChange={this.handleChange} />
				        	<span>Lactose free</span>
				        </div>
				        <div>
			        		<input type="checkbox" name="vegan" checked={this.vegan} onChange={this.handleChange} />
			        		<span>Vegan</span>
			        	</div>
			        </div>
			        <br />
			        <input class="form__submit" type="submit" />
		      	</form>
		    </section>

		    <section class="form-info">
		    	<h2>Entered information</h2>

		    	<p>Your name: {this.state.firstName} {this.state.lastName}</p>
		    	<p>Your age: {this.state.age}</p>
		    	<p>Your gender: {this.state.gender}</p>
		    	<p>Your destination: {this.state.destination}</p>
		    	<p>Your dietary restrictions:</p>

		    	<p>**Nuts free: {this.state.nutsFree? "Yes" : "No"}</p>
		    	<p>**Lactose free: {this.state.lactoseFree? "Yes" : "No"}</p>
		    	<p>**Vegan meal: {this.state.vegan? "Yes" : "No"}</p>
		    </section>
		</main>
  	);
   }
}

ReactDOM.render(
  <Form />,
  document.getElementById('root')
);