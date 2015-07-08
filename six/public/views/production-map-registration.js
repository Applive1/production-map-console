
import Six from '@grexie/six';
import $ from 'jquery';

export default Six.View.extend({
    user: {
        email: null,
        password: null
    },
    createdCallback: function() {
        this._super();

        this.popup = this.shadowRoot.querySelector('production-map-popup');
    },

    onClickBack: function() {
        this.popup.closePopup();
        this.login.popup.showPopup();
    },

    onClickRegister: function() {
        $.post(Six.Config.public.PM_API_ROOT + '/user', {
            user: {
                email: this.get('user.email'),
                password: this.get('user.password')
            }
        }).then(function(response) {
            if(response.user) {
                this.login.onAuthenticated(response.user);
            } else {

            }
        }.bind(this)).fail(function(err) {
            alert(err);
        });
    }
});