//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
//import "./Counter.js";
function SimpleCounter(props) {
	//object with (properties) - knows & has characteristics
	let mystyle = {
		color: "white",
		backgroundColor: "#101010",
		padding: "10px",
		fontFamily: "Sigmar One",
		fontSize: "50px",
		borderRadius: "20px",
		display: "inline",
		margin: "auto"
	};
	return (
		<div className="container">
			<div
				className="bigCounter text-center"
				style={{ backgroundColor: "black" }}>
				<div className="row pt-4 mr-5" style={mystyle}>
					<i className="far fa-clock fa-1x" />
				</div>
				<div className="col pt-5 mr-5" style={mystyle}>
					{props.digitSix}
				</div>
				<div className="col pt-5 mr-5" style={mystyle}>
					{props.digitFive}
				</div>
				<div className="col pt-5 mr-5" style={mystyle}>
					{props.digitFour}
				</div>
				<div className="col pt-5 mr-5" style={mystyle}>
					{props.digitThree}
				</div>
				<div className="col pt-5 mr-5" style={mystyle}>
					{props.digitTwo}
				</div>
				<div className="col pt-5 mr-5" style={mystyle}>
					{props.digitOne}
				</div>
			</div>
		</div>
	);
}

SimpleCounter.propTypes = {
	digitSix: PropTypes.number,
	digitFive: PropTypes.number,
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};

let counter = 0;
setInterval(function() {
	const six = Math.floor(counter / 10000);
	const five = Math.floor(counter / 10000);
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	counter++;
	//console.log(six, five, four, three, two, one);

	//render your react application
	ReactDOM.render(
		<SimpleCounter
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
			digitFive={five}
			digitSix={six}
		/>,
		document.querySelector("#app")
	);
}, 1000);
