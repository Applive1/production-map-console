
import Six from '@grexie/six';

export default Six.View.extend({
    attachedCallback: function() {
        this._super();

        this.style.setProperty('display', 'none');
        this.addEventListener('click', function(evt) {
            this.closePopup();
        }.bind(this), false);
        this.shadowRoot.querySelector('.popup').addEventListener('click', function(evt) {
            evt.stopPropagation();
        }, false);
    },

    closePopup: function() {
        this.style.setProperty('display', 'none');
    },

    showPopup: function(target, ... positions) {
        document.body.appendChild(this);
        this.style.setProperty('display', 'block');

        var popup = this.shadowRoot.querySelector('.popup');

        if (target) {
            popup.style.setProperty('position', 'absolute');

            var size = {
                width: popup.offsetWidth,
                height: popup.offsetHeight
            };

            var wsize = {
                width: document.body.offsetWidth,
                height: document.body.offsetHeight
            };

            var rect = {
                top: 'offsetTop' in target ? target.offsetTop : target.pageY,
                left: 'offsetLeft' in target ? target.offsetLeft : target.pageX,
                right: 'offsetWidth' in target ? target.offsetLeft + target.offsetWidth : target.pageX,
                bottom: 'offsetHeight' in target ? target.offsetTop + target.offsetHeight : target.pageY
            };

            for (var i = 0; i < positions.length; i++) {
                switch (positions[i]) {
                    case 'left':
                        if (rect.left >= size.width) {
                            var top = rect.top;
                            if(top + size.height > wsize.height) top = wsize.height - size.height;
                            popup.style.setProperty('left', (rect.left - size.width) + 'px');
                            popup.style.setProperty('top', top + 'px');
                            return;
                        }
                        break;
                    case 'top':
                        if (rect.top >= size.height) {
                            var left = rect.left;
                            if(left + size.width > wsize.width) left = wsize.width - size.width;
                            popup.style.setProperty('top', (rect.top - size.height) + 'px');
                            popup.style.setProperty('left', left + 'px');
                            return;
                        }
                        break;
                    case 'right':
                        if (wsize.width - rect.right >= size.width) {
                            var top = rect.top;
                            if(top + size.height > wsize.height) top = wsize.height - size.height;
                            popup.style.setProperty('left', (rect.right) + 'px');
                            popup.style.setProperty('top', top + 'px');
                            return;
                        }
                        break;
                    case 'bottom':
                        if (wsize.height - rect.bottom >= size.height) {
                            var left = rect.left;
                            if(left + size.width > wsize.width) left = wsize.width - size.width;
                            popup.style.setProperty('top', (rect.bottom) + 'px');
                            popup.style.setProperty('left', left + 'px');
                            return;
                        }
                        break;
                }
            }
        }
    }
});