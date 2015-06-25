
import Six from '@grexie/six';

export default Six.View.extend({
    createdCallback: function() {
        this._super();

        this.menu = this.shadowRoot.querySelector('.main-menu');
    },
    showPopup: function() {
        this.menu.showPopup(this.shadowRoot.querySelector('six-button'), 'bottom');
    }
});