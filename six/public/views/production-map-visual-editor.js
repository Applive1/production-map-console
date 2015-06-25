import Six from '@grexie/six';


export default Six.View.extend({
    createdCallback: function() {
        this._super();

        this.gridCanvas = document.createElement('canvas');
        this.gridCanvas.width = 10 * (window.devicePixelRatio || 1);
        this.gridCanvas.height = 10 * (window.devicePixelRatio || 1);

        var gridContext = this.gridCanvas.getContext('2d');
        gridContext.fillStyle = '#aaa';
        gridContext.fillRect(0, 0, 1, 1);
        gridContext.fill();

        var contextMenu = this.shadowRoot.querySelector('.context-menu');

        this.shadowRoot.querySelector('canvas').addEventListener('contextmenu', function(evt) {
            evt.preventDefault();
            contextMenu.showPopup(evt, 'right', 'left', 'bottom', 'top');
        }.bind(this));
    },

    attachedCallback: function() {
        this.layout();
        window.addEventListener('resize', this.layout.bind(this), false);
    },

    draw: function(ctx, size) {
        var pattern = ctx.createPattern(this.gridCanvas, 'repeat');
        ctx.fillStyle = pattern;
        ctx.fillRect(0, 0, size.width + 1, size.height + 1);
    },

    layout: function() {
        var toolbox = this.shadowRoot.querySelector('.toolbox');
        toolbox.style.removeProperty('min-width');
        var i = 1;
        while(toolbox.offsetHeight < toolbox.scrollHeight) {

            toolbox.style.setProperty('min-width', (48 * i + 12 * (i - 1)) + 'px');
            i++;
        }
        console.info(toolbox.style.minWidth);

        var canvas = this.shadowRoot.querySelector('canvas');
        canvas.width = this.offsetWidth;
        canvas.height = this.offsetHeight;
        var ctx = canvas.getContext('2d');

        ctx.scale(1 / (window.devicePixelRatio || 1), 1 / (window.devicePixelRatio || 1));
        ctx.save();
        this.draw(ctx, {width: canvas.width, height: canvas.height});
        ctx.restore();
    }
});