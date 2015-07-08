
import Six from '@grexie/six';

export default Six.View.extend({
    createdCallback: function() {
        this._super();

        if(!this.querySelector('header')) this.shadowRoot.querySelector('.header').style.setProperty('display', 'none');
        if(!this.querySelector('footer')) this.shadowRoot.querySelector('.footer').style.setProperty('display', 'none');
    }
});