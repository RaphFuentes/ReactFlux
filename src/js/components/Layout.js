import React from "react";
import AllNotifComp from "./AllNotifComp";
import EmailList from "./EmailList";
import StdTxtComp from "./StdTxtComp";
import CustomTxtArea from "./CustomTxtArea";
import ConfigStore from "../stores/ConfigStore";
import AppActions from '../actions/AppActions';

class Layout extends React.Component{
    constructor(props) {

        super(props);
        this.state = {
            allNotifStatus: true,
            stdTxtStatus: true,
            customTxt: "Raph was here",
            emailList: [
                {email: "ryan@gmail.com"},
                {email: "raph@gmail.com"},

            ],
            activeEmail: "ryan@gmail.com"
        };

    }

    componentWillMount(){
        AppActions.updateAllNotifStatus(this.state.allNotifStatus);
        AppActions.updateStdTxtStatus(this.state.stdTxtStatus);
        AppActions.updateCustomText(this.state.customTxt);
        AppActions.updateActiveEmail(this.state.activeEmail);

        ConfigStore.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount(){
        ConfigStore.removeChangeListener(this._onChange);
    }

    handlerAllNotifStatus(status){
        AppActions.updateAllNotifStatus(status);
    }

    handlerStdTxtStatus(status){
        AppActions.updateStdTxtStatus(status);
    }

    handlerCustomTxt(text){
        AppActions.updateCustomText(text);
    }

    handlerEmailChange(email){
        AppActions.updateActiveEmail(email);
    }

    handlerSave(){
        AppActions.updateNotifConfig();
    }

    _onChange(){
        this.setState({
            allNotifStatus: ConfigStore.getAllNotifStatus(),
            stdTxtStatus: ConfigStore.getStdTxtStatus(),
            customTxt: ConfigStore.getCustomTxt(),
            emailList: this.state.emailList
        });
    }

    render(){
        return(
            <div className="container">
                <p>Möchten Sie die Einstellungen Ihrer Benachrichtigungen ändern ?</p>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6">
                                    <p>Alle Benachrichtigungen</p>
                                </div>
                                <div className="col-md-6">

                                    <AllNotifComp onChange={this.handlerAllNotifStatus} allNotifStatus= {this.state.allNotifStatus} />

                                </div>
                            </div>
                        </div>
                    </div>
                    <h4>E-Mail Adresse</h4>

                    <EmailList emailListData={this.state.emailList} onChange={this.handlerEmailChange} disabled={!this.state.allNotifStatus} value={this.state.activeEmail} />

                    <div className="mt-4">
                        <h4>Benachrichtigungstext</h4>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>Standardtext</p>
                                    </div>
                                    <div className="col-md-6">
                                        
                                        <StdTxtComp onChange={this.handlerStdTxtStatus} stdTxtStatus= {this.state.stdTxtStatus}/>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <CustomTxtArea onChange={this.handlerCustomTxt} disabled={this.state.stdTxtStatus} text={this.state.customTxt}/>

                    <div className="mt-4">
                        <button type="button" onClick={this.handlerSave} className="btn btn-success">Save</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Layout;