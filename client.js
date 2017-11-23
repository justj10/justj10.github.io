import React from "react";
import ReactDom from "react-dom";

class Layout extends React.Component {
	render() {
		return(
			<h1>Does It Work!</h1>
		);
	}

}

const app = document.getElementById('JS REACT');
ReactDom.render(<Layout/>,app);