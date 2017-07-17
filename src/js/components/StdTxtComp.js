import React from "react";
import ReactDOM from "react-dom";

class StdTxtComp extends React.Component{
	constructor(props){
		super(props);
		this.handleStdTxtStatus = this.handleStdTxtStatus.bind(this);
	}

	handleStdTxtStatus(){
		this.props.onChange(document.getElementById('chk_stdconfig').checked);
	}

	render(){
		return (
			<label className="switch">
	            <input id="chk_stdconfig" type="checkbox" onChange={this.handleStdTxtStatus} checked={this.props.stdTxtStatus}/>
	            <div className="slider round"></div>
	        </label>
        );
	}
}

export default StdTxtComp;