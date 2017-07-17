import React from "react";
import ReactDOM from "react-dom";

class AllNotifComp extends React.Component{
	constructor(props){
		super(props);
		this.handleAllNotifStatus = this.handleAllNotifStatus.bind(this);
	}

	handleAllNotifStatus(){
		this.props.onChange(document.getElementById('chk_allconfig').checked);
	}

	render(){
		return (
			<label className="switch">
	            <input id="chk_allconfig" type="checkbox" onChange={this.handleAllNotifStatus} checked={this.props.allNotifStatus}  />
	            <div className="slider round"></div>
	        </label>
        );
	}
}

export default AllNotifComp;