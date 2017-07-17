import React from "react";
import ReactDOM from "react-dom";

class CustomTxtArea extends React.Component{
	constructor(props){
		super(props);
		this.handlerTextChange = this.handlerTextChange.bind(this);
	}

	handlerTextChange(){
		this.props.onChange(document.getElementById('txt_area').value);
	}

	render(){
		return (
			<textarea id="txt_area" disabled={this.props.disabled} value={this.props.text} onChange={this.handlerTextChange} />
        );
	}
}

export default CustomTxtArea;



