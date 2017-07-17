import React from "react";
import ReactDOM from "react-dom";

class EmailList extends React.Component{
	constructor(props){
		super(props);
		this.handleEmailChange = this.handleEmailChange.bind(this);
	}

	handleEmailChange(){
		this.props.onChange(document.getElementById('email_list').value);
	}

	render(){
		let emailListNodes = this.props.emailListData.map((list, index) => {
			return(
				<option key={index}>{list.email}</option>
			);		
		});

		return(
			 <div className="mt-3">
                <select id="email_list" onChange={this.handleEmailChange} value={this.props.value} disabled={this.props.disabled}>
                    {emailListNodes}
                </select>
            </div>
			);
	}
}

export default EmailList;