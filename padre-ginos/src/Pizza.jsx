// const Pizza = (props) => {
// 	return React.createElement("div", {}, [
// 		React.createElement("h2", { key: "name" }, props.name),
// 		React.createElement("p", { key: "description" }, props.description),
// 	]);
// };

export const Pizza = (props) => {
	return (
		<div className="pizza">
			<h2 className="name">{props.name}</h2>
			<p className="description">{props.description}</p>
		</div>
	);
};

export default Pizza;
