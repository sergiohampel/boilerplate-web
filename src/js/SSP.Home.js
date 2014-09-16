var SSP = SSP || {};

SSP.Home = {
	_BASEPATH: '../images/',
	_currentScreen: null,

	setUp: function(){
		var that = this;

		that._currentScreen = $('body').data('screen');
		
		if (that._currentScreen == 'home') {

		};

	}
}