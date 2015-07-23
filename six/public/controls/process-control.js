
import Control from './control';


var lineIntersect = function(p1, p2, q1, q2) {
    return {
        x: ((p1.x * p2.y - p1.y * p2.x) * (q1.x - q2.x) - (p1.x - p2.x) * (q1.x * q2.y - q1.y * q2.x)) /
            ((p1.x - p2.x) * (q1.y - q2.y) - (p1.y - p2.y) * (q1.x - q2.x)),
        y: ((p1.x * p2.y - p1.y * p2.x) * (q1.y - q2.y) - (p1.y - p2.y) * (q1.x * q2.y - q1.y * q2.x)) /
            ((p1.x - p2.x) * (q1.y - q2.y) - (p1.y - p2.y) * (q1.x - q2.x))
    };
};

var lineRectEdge = function(p1, p2, position, size) {
    var center = { x: position.x + size.width / 2, y: position.y + size.height / 2 };
    var angle = Math.atan2(p2.x - p1.x, p1.y - p2.y);

    // bottom edge, 4th quadrant
    if(angle > Math.atan2((position.x + size.width) - center.x, center.y - (position.y + size.height))) {
        return 'bottom';
    // right edge
    } else if(angle > Math.atan2((position.x + size.width) - center.x, center.y - position.y)) {
        return 'right';
    // top edge
    } else if(angle > Math.atan2(position.x - center.x, center.y - position.y)) {
        return 'top';
    // left edge
    } else if(angle > Math.atan2(position.x - center.x, center.y - (position.y + size.height))) {
        return 'left';
    // bottom edge, 0th quadrant
    } else {
        return 'bottom';
    }
};

var lineRectIntersect = function(p1, p2, position, size) {
    var edge = lineRectEdge(p1, p2, position, size);

    // right edge
    if(edge === 'right') {
        return lineIntersect(p1, p2,
            { x: position.x + size.width, y: position.y },
            { x: position.x + size.width, y: position.y + size.height });
    // top edge
    } else if(edge === 'top') {
        return lineIntersect(p1, p2,
            { x: position.x, y: position.y },
            { x: position.x + size.width, y: position.y });
    // left edge
    } else if(edge === 'left') {
        return lineIntersect(p1, p2,
            { x: position.x, y: position.y },
            { x: position.x, y: position.y + size.height });
    // bottom edge
    } else if(edge === 'bottom') {
        return lineIntersect(p1, p2,
            { x: position.x, y: position.y + size.height },
            { x: position.x + size.width, y: position.y + size.height });
    }
};

var lineSegments = function(p1, p2, r1position, r1size, r2position, r2size) {
    var edge = lineRectEdge(p1, p2, r1position, r1size);

    // determine the edge, it should be equal and opposite on both sides of the line
    if(edge === 'left' || edge === 'right') {
        // fit the y axis within the rectangles' bounding boxes - rounded corners and 5px padding
        p1.y = Math.max(Math.min(p1.y, r1position.y + r1size.height - 10), r1position.y + 10);
        p2.y = Math.max(Math.min(p2.y, r2position.y + r2size.height - 10), r2position.y + 10);

        // see if we can fit a straight line between the two boxes
        if(p2.y > r1position.y && p2.y < r1position.y + r1size.height ||
            p1.y > r2position.y && p1.y < r2position.y + r2size.height) {
            var y = (p1.y + p2.y) / 2;
            return [{ x: p1.x, y: y }, { x: p2.x, y: y }];
        }

        var segments = [];
        segments.push(p1)
        segments.push({ x: segments[0].x + (p2.x - segments[0].x) / 2, y: segments[0].y });
        segments.push({ x: segments[0].x + (p2.x - segments[0].x) / 2, y: p2.y });
        segments.push(p2);
        return segments;
    } else {
        // fit the x axis within the rectangles' bounding boxes - rounded corners and 5px padding
        p1.x = Math.max(Math.min(p1.x, r1position.x + r1size.width - 10), r1position.x + 10);
        p2.x = Math.max(Math.min(p2.x, r2position.x + r2size.width - 10), r2position.x + 10);

        // see if we can fit a straight line between the two boxes
        if(p2.x > r1position.x && p2.x < r1position.x + r1size.width ||
            p1.x > r2position.x && p1.x < r2position.x + r2size.width) {
            var x = (p1.x + p2.x) / 2;
            return [{ x: x, y: p1.y }, { x: x, y: p2.y }];
        }

        var segments = [];
        segments.push(p1);
        segments.push({ x: segments[0].x, y: segments[0].y + (p2.y - segments[0].y) / 2 });
        segments.push({ x: p2.x, y: segments[0].y + (p2.y - segments[0].y) / 2 });
        segments.push(p2);
        return segments;
    }
};

var drawHead = function(ctx,x0,y0,x1,y1,x2,y2) {
    var radius=3;
    var twoPI=2*Math.PI;

    // all cases do this.
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x0,y0);
    ctx.lineTo(x1,y1);
    ctx.lineTo(x2,y2);

    var cpx=(x0+x1+x2)/3;
    var cpy=(y0+y1+y2)/3;
    ctx.quadraticCurveTo(cpx,cpy,x0,y0);
    ctx.fill();
    ctx.restore();
};

var drawArrow = function(ctx, x1, y1, x2, y2) {
    var angle = Math.PI / 8;
    var d = 20;

    var dist=Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
    var ratio=(dist-d/3)/dist;
    var tox, toy,fromx,fromy;

        tox=Math.round(x1+(x2-x1)*ratio);
        toy=Math.round(y1+(y2-y1)*ratio);

    fromx=x1;
    fromy=y1;

    // Draw the shaft of the arrow
    ctx.lineTo(tox,toy);
    ctx.stroke();

    // calculate the angle of the line
    var lineangle=Math.atan2(y2-y1,x2-x1);
    // h is the line length of a side of the arrow head
    var h=Math.abs(d/Math.cos(angle));

    var angle1=lineangle+Math.PI+angle;
    var topx=x2+Math.cos(angle1)*h;
    var topy=y2+Math.sin(angle1)*h;
    var angle2=lineangle+Math.PI-angle;
    var botx=x2+Math.cos(angle2)*h;
    var boty=y2+Math.sin(angle2)*h;
    drawHead(ctx,topx,topy,x2,y2,botx,boty);
}


export default Control.extend({
    tagName: 'process',
    name: 'Process',
    icon: '/assets/controls/connectorSmall.png',

    minSize: null,
    maxSize: null,

    comment: 'a process between two servers',

    init: function(designer, node) {
        this._super(designer, node);
    },


    ready: function() {
        this._super();

        if(this.node.hasAttribute('from')) {
            var startControl = this.node.getAttribute('from');
            startControl = this.designer.controls.filter((x) => x.node.getAttribute('id') === startControl)[0];
            this.startControl = startControl || null;
            if(this.startControl) this.startControl.connectors.push(this);
        }

        if(this.node.hasAttribute('to')) {
            var endControl = this.node.getAttribute('to');
            endControl = this.designer.controls.filter((x) => x.node.getAttribute('id') === endControl)[0];
            this.endControl = endControl || null;
            if(this.endControl) this.endControl.connectors.push(this);
        }
    },

    beginDrawing: function(startControl) {
        if(!!startControl && startControl.tagName !== 'process') {
            this.startControl = startControl;

            if(!startControl.node.hasAttribute('id')) {
                var i = 1;
                while(this.designer.controls.filter(function(x) { return x.node.getAttribute('id') === startControl.tagName + '-' + i; })[0]) i++;
                startControl.node.setAttribute('id', startControl.tagName + '-' + i);
            }

            this.node.setAttribute('from', startControl.node.getAttribute('id'));

            return true;
        } else {
            return false;
        }
    },

    endDrawing: function(startControl, endControl) {
        if(!!endControl && endControl !== startControl && endControl.tagName !== 'process') {
            this.startControl = startControl;
            this.endControl = endControl;

            if(!startControl.node.hasAttribute('id')) {
                var i = 1;
                while(this.designer.controls.filter(function(x) { return x.node.getAttribute('id') === startControl.tagName + '-' + i; })[0]) i++;
                startControl.node.setAttribute('id', startControl.tagName + '-' + i);
            }

            if(!endControl.node.hasAttribute('id')) {
                var i = 1;
                while(this.designer.controls.filter(function(x) { return x.node.getAttribute('id') === endControl.tagName + '-' + i; })[0]) i++;
                endControl.node.setAttribute('id', endControl.tagName + '-' + i);
            }

            this.node.setAttribute('from', startControl.node.getAttribute('id'));
            this.node.setAttribute('to', endControl.node.getAttribute('id'));

            startControl.connectors.push(this);
            endControl.connectors.push(this);

            this.comment = 'a process between ' + startControl.node.getAttribute('id') + ' and ' + endControl.node.getAttribute('id');

            this.layout();
            return true;
        } else {
            return false;
        }
    },


    hitTest: function(point) {
        var segments = this.segments;

        for(var i = 1; i < segments.length; i++) {
            var p1 = segments[i - 1];
            var p2 = segments[i];

            if(p1.x === p2.x) {
                if(point.x > p1.x - 4 && point.x < p1.x + 4 &&
                    (point.y > p1.y && point.y < p2.y || (point.y > p2.y && point.y < p1.y))) return this;
            } else if(p1.y === p2.y) {
                if(point.y > p1.y - 4 && point.y < p1.y + 4 &&
                    (point.x > p1.x && point.x < p2.x || (point.x > p2.x && point.x < p1.x))) return this;
            }
        }

        return null;
    },


    drawFocusRectangle: function(ctx) {
        var segments = this.segments;

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(segments[0].x, segments[0].y);
        for(var i = 1; i < segments.length - 1; i++) {
            if(Math.abs(segments[i].x - segments[i + 1].x) > 5) {
                var ysgn = segments[i - 1].y - segments[i].y;
                ysgn = ysgn / Math.abs(ysgn);
                var xsgn = segments[i + 1].x - segments[i].x;
                xsgn = xsgn / Math.abs(xsgn);

                ctx.lineTo(segments[i].x, segments[i].y + ysgn * 5);
                ctx.quadraticCurveTo(segments[i].x, segments[i].y, segments[i].x + xsgn * 5, segments[i].y);
            } else if(Math.abs(segments[i].y - segments[i + 1].y) > 5) {
                var xsgn = segments[i - 1].x - segments[i].x;
                xsgn = xsgn / Math.abs(xsgn);
                var ysgn = segments[i + 1].y - segments[i].y;
                ysgn = ysgn / Math.abs(ysgn);

                ctx.lineTo(segments[i].x + xsgn * 5, segments[i].y);
                ctx.quadraticCurveTo(segments[i].x, segments[i].y, segments[i].x, segments[i].y + ysgn * 5);
            } else {
                ctx.lineTo(segments[i].x, segments[i].y);
            }
        }

        ctx.fillStyle = '#46d';
        ctx.strokeStyle = '#46d';
        ctx.lineWidth = 4;
        drawArrow(ctx, segments[segments.length - 2].x, segments[segments.length - 2].y,
            segments[segments.length - 1].x, segments[segments.length - 1].y);

        ctx.restore();
    },

    layout: function() {
        var startCenter = {
            x: this.startControl.position.x + this.startControl.size.width / 2,
            y: this.startControl.position.y + this.startControl.size.height / 2
        };
        var endCenter = {
            x: this.endControl.position.x + this.endControl.size.width / 2,
            y: this.endControl.position.y + this.endControl.size.height / 2
        };

        this.position = {
            x: Math.min(startCenter.x, endCenter.x),
            y: Math.min(startCenter.y, endCenter.y)
        };

        this.size = {
            width: Math.abs(endCenter.x - startCenter.x),
            height: Math.abs(endCenter.y - startCenter.y)
        };
    },

    get segments() {
        var startCenter = {
            x: this.startControl.position.x + this.startControl.size.width / 2,
            y: this.startControl.position.y + this.startControl.size.height / 2
        };

        if(this.endControl) {
            var endCenter = {
                x: this.endControl.position.x + this.endControl.size.width / 2,
                y: this.endControl.position.y + this.endControl.size.height / 2
            };
        } else {
            var endCenter = {
                x: this.position.x + this.size.width,
                y: this.position.y + this.size.height
            };
        }

        startCenter = lineRectIntersect(startCenter, endCenter, this.startControl.position, this.startControl.size);

        if(this.endControl) {
            endCenter = lineRectIntersect(endCenter, startCenter, this.endControl.position, this.endControl.size);
            var segments = lineSegments(startCenter, endCenter, this.startControl.position, this.startControl.size, this.endControl.position, this.endControl.size);
        } else {
            var segments = [startCenter, endCenter];
        }

        return segments;
    },

    draw: function(ctx) {

        var segments = this.segments;



        ctx.save();
        ctx.beginPath();
        ctx.moveTo(segments[0].x, segments[0].y);
        for(var i = 1; i < segments.length - 1; i++) {
            if(Math.abs(segments[i].x - segments[i + 1].x) > 5) {
                var ysgn = segments[i - 1].y - segments[i].y;
                ysgn = ysgn / Math.abs(ysgn);
                var xsgn = segments[i + 1].x - segments[i].x;
                xsgn = xsgn / Math.abs(xsgn);

                ctx.lineTo(segments[i].x, segments[i].y + ysgn * 5);
                ctx.quadraticCurveTo(segments[i].x, segments[i].y, segments[i].x + xsgn * 5, segments[i].y);
            } else if(Math.abs(segments[i].y - segments[i + 1].y) > 5) {
                var xsgn = segments[i - 1].x - segments[i].x;
                xsgn = xsgn / Math.abs(xsgn);
                var ysgn = segments[i + 1].y - segments[i].y;
                ysgn = ysgn / Math.abs(ysgn);

                ctx.lineTo(segments[i].x + xsgn * 5, segments[i].y);
                ctx.quadraticCurveTo(segments[i].x, segments[i].y, segments[i].x, segments[i].y + ysgn * 5);
            } else {
                ctx.lineTo(segments[i].x, segments[i].y);
            }
        }

        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 6;
        ctx.shadowColor = 'rgba(0,0,0,0.25)';

        ctx.fillStyle = '#aaa';
        ctx.strokeStyle = '#aaa';
        ctx.lineWidth = 4;
        drawArrow(ctx, segments[segments.length - 2].x, segments[segments.length - 2].y,
            segments[segments.length - 1].x, segments[segments.length - 1].y);

        ctx.restore();
    }
});