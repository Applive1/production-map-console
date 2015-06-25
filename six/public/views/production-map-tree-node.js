
import Six from '@grexie/six';

export default Six.View.extend({
    createdCallback: function() {
        this._super();

        var branch = this.shadowRoot.querySelector('.tree-branch');
        branch.addEventListener('webkitTransitionEnd', function(evt) {
            if(this.get('expanded')) {
                branch.style.setProperty('-webkit-transition', 'none');
                branch.style.setProperty('max-height', 'none');
                setTimeout(function () {
                    branch.style.removeProperty('-webkit-transition');
                }, 0);
            } else {
                branch.style.setProperty('-webkit-transition', 'none');
                branch.style.removeProperty('max-height');
                setTimeout(function () {
                    branch.style.removeProperty('-webkit-transition');
                }, 0);
            }
        }.bind(this));

        this.set('expanded', false);
        var toggleExpanded = function(evt) {
            if(!this.get('empty')) {
                this.set('expanded', !this.get('expanded'));

                if(this.get('expanded')) {
                    branch.style.setProperty('max-height', 'none');
                    var height = branch.offsetHeight + 'px'
                    branch.style.removeProperty('max-height');
                    setTimeout(function() {
                        branch.style.setProperty('max-height', height);
                    }, 0);
                } else {
                    branch.style.setProperty('-webkit-transition', 'none');
                    branch.style.setProperty('max-height', 'none');
                    var height = branch.offsetHeight + 'px'
                    branch.style.setProperty('max-height', height);
                    setTimeout(function() {
                        branch.style.removeProperty('-webkit-transition');
                        branch.style.setProperty('max-height', '0px');
                    }, 0);
                }
            }
        }.bind(this);
        this.shadowRoot.querySelector('.tree-leaf').addEventListener('dblclick', toggleExpanded, false);
        this.shadowRoot.querySelector('.tree-leaf .chevron').addEventListener('click', toggleExpanded, false);
        this.shadowRoot.querySelector('.tree-leaf .chevron').addEventListener('dblclick', function(evt) {
            evt.stopPropagation();
        }, false);

        this.shadowRoot.querySelector('.tree-leaf').addEventListener('click', function(evt) {
            var o = this;
            while(o.parentNode && o.tagName.toLowerCase() !== 'production-map-tree') o = o.parentNode;
            if(o.tagName.toLowerCase() === 'production-map-tree') {
                var active = o.querySelector('production-map-tree-node[active]');
                if(active) {
                    active.set('active', false);
                    active.removeAttribute('active');
                }
            }

            this.set('active', true);
            this.setAttribute('active', '');
        }.bind(this), false);

        if(this.querySelector('production-map-tree-node') === null) {
            this.set('empty', true);
        }
    }
});