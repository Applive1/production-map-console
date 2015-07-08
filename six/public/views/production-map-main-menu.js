
import Six from '@grexie/six';
import $ from 'jquery';

export default Six.View.extend({
    createdCallback: function() {
        this._super();

        this.menu = this.shadowRoot.querySelector('.main-menu');
        this.settings = this.shadowRoot.querySelector('.settings');
    },
    showPopup: function() {
        this.menu.showPopup(this.shadowRoot.querySelector('six-button'), 'bottom');
    },

    onClickSettings: function() {
        this.settings.showPopup();
    },

    onClickLogout: function() {
        $.post(Six.Config.public.PM_API_ROOT + '/user/me/logout').then(function() {
            var mainWindow = document.querySelector('production-map-main-window');
            mainWindow.set('user', null);

            var login = document.querySelector('production-map-login');
            login.set('user', { email: null, password: null });
            login.popup.showPopup();
        }.bind(this)).fail(function(err) {
            alert(err);
        });
    }
});