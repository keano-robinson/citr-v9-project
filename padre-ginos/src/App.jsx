import React from "react";
import ReactDOM from "react-dom/client";
import Pizza from "./Pizza.jsx";

const App = () => {
	return React.createElement(
		"div",
		{},
		React.createElement(
			"h1",
			{ style: { color: "green" } },
			"Hello, Padre Gino's!",
		),
		<Pizza
			name="Margherita"
			description="Classic pizza with tomatoes, mozzarella, and basil"
		></Pizza>,
		<Pizza
			name="Pepperoni"
			description="Topped with pepperoni and cheese."
		></Pizza>,
		<Pizza name="Veggie" description="Loaded with fresh vegetables."></Pizza>,
		<Pizza name="Hawaiian" description="Ham and pineapple topping."></Pizza>,
	);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
