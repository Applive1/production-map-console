
import Six from '@grexie/six';

export const controls = {};

function roundRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
}


export default Six.Object.extend({

    minSize: {
        width: 200,
        height: 75
    },

    maxSize: {
        width: 200,
        height: 75
    },

    init: function(designer, node) {
        this.designer = designer;
        this.node = node;

        var frame = node.getAttribute('frame');

        if(frame) {
            frame = frame.split(/\s*,\s*/g).map(function(x) { return parseInt(x, 10); });

            this.position = {
                x: frame[0],
                y: frame[1]
            };

            this.size = {
                width: frame[2],
                height: frame[3]
            };
        } else {
            this.position = {
                x: 0,
                y: 0
            };
            if(this.minSize) {
                this.size = {
                    width: this.minSize.width,
                    height: this.minSize.height
                };
            } else {
                this.size = {
                    width: 0,
                    height: 0
                };
            }
        }

        this.iconImage = document.createElement('img');
        this.iconImage.src = this.icon;

        this.connectors = [];
    },

    ready: function() {

    },

    beginDrawing: function(control) {
        return !control;
    },

    endDrawing: function() {
        return true;
    },

    hitTest: function(point) {
        if(this.position.x <= point.x && this.position.y <= point.y && this.position.x + this.size.width > point.x && this.position.y + this.size.height > point.y) {
            return this;
        }
    },

    drawFocusRectangle: function(ctx) {
        ctx.save();
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#46d';
        ctx.strokeRect(this.position.x - 2 - 0.5, this.position.y - 2 - 0.5, (this.size.width + 5) | 0, (this.size.height + 5) | 0);
        ctx.restore();
    },

    layout: function() {
        for(var i = 0; i < this.connectors.length; i++) {
            this.connectors[i].layout();
        }
    },

    draw: function(ctx) {
        var linearGradient = ctx.createLinearGradient(this.position.x, this.position.y, this.position.x, this.position.y + this.size.height);
        linearGradient.addColorStop(0, '#fff');
        linearGradient.addColorStop(1, '#f0f0f0');

        ctx.save();
        ctx.fillStyle = linearGradient;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 6;
        ctx.shadowColor = 'rgba(0,0,0,0.25)';
        roundRect(ctx, this.position.x, this.position.y, this.size.width, this.size.height, 5);
        ctx.fill();
        ctx.restore();

        ctx.save();
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#ccc';
        roundRect(ctx, this.position.x - 0.5, this.position.y - 0.5, this.size.width, this.size.height, 5);
        ctx.stroke();
        ctx.restore();

        ctx.save();
        roundRect(ctx, this.position.x - 0.5, this.position.y - 0.5, this.size.width, this.size.height, 5);
        ctx.clip();

        ctx.drawImage(this.iconImage, this.position.x + 20, this.position.y + 20, this.size.height - 40, this.size.height - 40);

        ctx.fillStyle = '#000';
        ctx.font = '600 13px "Open Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif';
        ctx.textBaseline = 'middle';
        ctx.fillText(this.name, this.position.x + 20 + this.size.height - 40 + 20, this.position.y + this.size.height / 2);
        ctx.restore();
    }
}).on('extend', function(constructor) {
    if(constructor.prototype.virtual) return;

    var tagName = constructor.prototype.tagName;
    controls[tagName] = constructor;
});