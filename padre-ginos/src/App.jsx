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
			name="Pepperoni"
			description="Topped with pepperoni and cheese."
			image="/public/pizzas/pepperoni.webp"
		></Pizza>,
		<Pizza
			name="Margherita"
			description="Classic pizza with tomatoes, mozzarella, and basil"
			image="/public/pizzas/big_meat.webp"
		></Pizza>,
		<Pizza
			name="Hawaiian"
			description="Ham and pineapple topping."
			image="/public/pizzas/hawaiian.webp"
		></Pizza>,
	);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
