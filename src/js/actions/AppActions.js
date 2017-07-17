import AppDispatcher from "../dispatcher/AppDispatcher";
import AppConstants from "../constants/AppConstants";

const AppActions = {

	getNotifConfig(key){
		AppDispatcher.handleViewAction({
      	actionType:AppConstants.GET_NOTIF_CONFIG,
      	data: key
		});
	},

	updateNotifConfig(){
		AppDispatcher.handleViewAction({
      	actionType:AppConstants.UPDATE_NOTIF_CONFIG,
		});
	},

	updateAllNotifStatus(status){
		AppDispatcher.handleViewAction({
      	actionType:AppConstants.UPDATE_ALLNOTIF_STATUS,
      	data: status
		});
	},

	updateStdTxtStatus(status){
		AppDispatcher.handleViewAction({
      	actionType:AppConstants.UPDATE_STDTXT_STATUS,
      	data: status
		});
	},

	updateCustomText(text){
		AppDispatcher.handleViewAction({
      	actionType:AppConstants.UPDATE_CUSTOM_TXT,
      	data: text
		});
	},

	updateActiveEmail(email){
		AppDispatcher.handleViewAction({
      	actionType:AppConstants.UPDATE_ACTIVE_EMAIL,
      	data: email
		});
	}

};

export default AppActions;	