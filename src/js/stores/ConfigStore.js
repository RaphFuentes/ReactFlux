import AppDispatcher from "../dispatcher/AppDispatcher";
import AppConstants from "../constants/AppConstants";
import objectAssign from "object-assign";
import { EventEmitter } from "events";

const CHANGE_EVENT = "change"

let allNotifStatus;
let stdTxtStatus;
let customTxt;
let activeEmail;

const setAllNotifStatus = (status) => {
	allNotifStatus = status;
};

const setStdTxtStatus = (status) => {
	stdTxtStatus = status;
};

const setCustomTxt = (text) => {
	customTxt = text;
};

const setActiveEmail = (email) => {
	activeEmail = email;
};

const updateConfig = () => {
	console.log(configStore.getAllNotifStatus());
	console.log(configStore.getStdTxtStatus());
	console.log(configStore.getCustomTxt());
	console.log(configStore.getActiveEmail());
};

const configStore = objectAssign({}, EventEmitter.prototype, {
	addChangeListener(cb){
		this.on(CHANGE_EVENT, cb);
	},

	removeChangeListener(cb){
		this.removeListener(CHANGE_EVENT, cb);
	},
	
	getAllNotifStatus(){
		return allNotifStatus;
	},

	getStdTxtStatus(){
		return stdTxtStatus;
	},

	getCustomTxt(){
		return customTxt;
	},

	getActiveEmail(){
		return activeEmail;
	}
});

AppDispatcher.register(function(payload){
	const action = payload.action;
	switch(action.actionType){

		case AppConstants.UPDATE_ALLNOTIF_STATUS:
		 	setAllNotifStatus(action.data);
		break;

		case AppConstants.UPDATE_STDTXT_STATUS:
		 	setStdTxtStatus(action.data);
		break;

		case AppConstants.UPDATE_CUSTOM_TXT:
		 	setCustomTxt(action.data);
		break;

		case AppConstants.UPDATE_ACTIVE_EMAIL:
		 	setActiveEmail(action.data);
		break;

		case AppConstants.UPDATE_NOTIF_CONFIG:
		 	updateConfig();
		break;

		default:
			return true;
	}

	configStore.emit(CHANGE_EVENT);
});

export default configStore;