
import Six from '@grexie/six';
import $ from 'jquery';

export default Six.View.extend({
    attachedCallback: function() {
        this._super();

        this.parentNode.set('onClose', this.onClickCancel.bind(this));
    },

    onClickCancel: function() {
        $.get(Six.Config.public.PM_API_ROOT + '/user/me', this.get('user')).then(function(response) {
            this.set('user', response.user);
            this.parentNode.closePopup();
        }.bind(this)).fail(function(err) {
            alert(err);
        });
    },

    onClickSave: function() {
        $.post(Six.Config.public.PM_API_ROOT + '/user/' + this.get('user.id'), { user: this.get('user') }).then(function(response) {
            this.set('user', response.user);
            this.parentNode.closePopup();
        }.bind(this)).fail(function(err) {
            alert(err);
        });
    }
});