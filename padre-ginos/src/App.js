const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", { key: "name" }, props.name),
    React.createElement("p", { key: "description" }, props.description),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement(
      "h1",
      { style: { color: "red" } },
      "Hello, Padre Gino's!"
    ),
    React.createElement(Pizza, {
      name: "Margherita",
      description: "Classic pizza with tomatoes, mozzarella, and basil.",
    }),
    React.createElement(Pizza, {
      name: "Pepperoni",
      description: "Topped with pepperoni and cheese.",
    }),
    React.createElement(Pizza, {
      name: "Veggie",
      description: "Loaded with fresh vegetables.",
    }),
    React.createElement(Pizza, {
      name: "Hawaiian",
      description: "Ham and pineapple topping.",
    })
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
