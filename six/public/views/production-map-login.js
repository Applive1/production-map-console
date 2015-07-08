
import Six from '@grexie/six';
import $ from 'jquery';

export default Six.View.extend({
    user: {
        email: null,
        password: null
    },
    attachedCallback: function() {
        this._super();

        this.popup = this.shadowRoot.querySelector('production-map-popup');
        this.registration = this.shadowRoot.querySelector('production-map-registration');
        this.registration.login = this;

        $.get(Six.Config.public.PM_API_ROOT + '/user/me').then(function(response) {
            if(response.user) {
                this.onAuthenticated(response.user);
            } else {
                this.popup.showPopup();
            }
        }.bind(this)).fail(function(err) {
            alert(err);
        });
    },

    onClickRegister: function() {
        this.popup.closePopup();
        this.registration.popup.showPopup();
    },

    onClickLogin: function() {
        $.post(Six.Config.public.PM_API_ROOT + '/user/login', {
            user: {
                email: this.get('user.email'),
                password: this.get('user.password')
            }
        }).then(function(response) {
            if(response.user) {
                this.onAuthenticated(response.user);
            } else {

            }
        }.bind(this)).fail(function(err) {
            alert(err);
        });
    },

    onAuthenticated: function(user) {
        this.popup.closePopup();
        this.registration.popup.closePopup();

        var mainWindow = document.querySelector('production-map-main-window');
        mainWindow.set('user', user);
        this.parentNode.insertBefore(mainWindow, this);
    }
});