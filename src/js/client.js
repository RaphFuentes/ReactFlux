import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component{
	render(){
		return(
                <div class="container">
        <p>Möchten Sie die Einstellungen Ihrer Benachrichtigungen ändern ?</p>
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-6">
                            <p>Alle Benachrichtigungen</p>
                        </div>
                        <div class="col-md-6">
                            <label class="switch">
                                <input type="checkbox" checked="true" />
                                <div class="slider round">
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <h4>E-Mail Adresse</h4>
            <div class="mt-3">
                <select>
                    <option>Addresse 1</option>
                    <option>Addresse 2</option>
                </select>
            </div>
            <div class="mt-4">
                <h4>Benachrichtigungstext</h4>
                <div class="row">
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col-md-6">
                                <p>Standardtext</p>
                            </div>
                            <div class="col-md-6">
                                <label class="switch">
                                    <input type="checkbox" checked="true" />
                                    <div class="slider round">
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <textarea>Dieser Text wird versendet</textarea>
            <div class="mt-4">
                <button type="button" class="btn btn-success">Save</button>
            </div>
        </div>
    </div>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<Layout />, app);
