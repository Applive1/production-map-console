import Six from '@grexie/six';

import { controls } from '../controls/index';

export default Six.View.extend({
    createdCallback: function() {
        this._super();


        window.addEventListener('keydown', function(evt) {
            if(evt.which === 8 || evt.which === 46) {
                if(this.selectedControl) {
                    this.controls.splice(this.controls.indexOf(this.selectedControl), 1);
                    this.selectedControl.node.parentNode.removeChild(this.selectedControl.node);

                    for(var i = 0; i < this.selectedControl.connectors.length; i++) {
                        var connector = this.selectedControl.connectors[i];
                        if(connector.startControl === this.selectedControl) {
                            connector.endControl.connectors.splice(connector.endControl.connectors.indexOf(connector), 1);
                        }
                        if(connector.endControl === this.selectedControl) {
                            connector.startControl.connectors.splice(connector.startControl.connectors.indexOf(connector), 1);
                        }
                        connector.node.parentNode.removeChild(connector.node);
                        this.controls.splice(this.controls.indexOf(connector), 1);
                    }

                    this.selectedControl = null;

                    this.saveMarkup();

                    var ctx = canvas.getContext('2d');

                    ctx.save();
                    this.draw(ctx, {width: canvas.width, height: canvas.height});
                    ctx.restore();
                }
            }
        }.bind(this), false);

        this.bind('file.content').observe(function(oldValue, newValue) {
            this.onFileChange(newValue);
        }.bind(this));

        this.controls = [];
        this.selectedControl = null;

        this.gridCanvas = document.createElement('canvas');
        this.gridCanvas.width = 10 * (window.devicePixelRatio || 1);
        this.gridCanvas.height = 10 * (window.devicePixelRatio || 1);

        var gridContext = this.gridCanvas.getContext('2d');
        gridContext.fillStyle = '#aaa';
        gridContext.fillRect(0, 0, 1, 1);
        gridContext.fill();

        var contextMenu = this.shadowRoot.querySelector('.context-menu');
        var canvas = this.shadowRoot.querySelector('canvas');
        canvas.addEventListener('contextmenu', function(evt) {
            evt.preventDefault();
            contextMenu.showPopup(evt, 'right', 'left', 'bottom', 'top');
        }.bind(this));

        var toolbox = this.shadowRoot.querySelector('.toolbox');
        for(var v in controls) {
            var button = document.createElement('six-button');

            button.setAttribute('title', controls[v].prototype.name || v);

            var img = document.createElement('img');
            img.src = controls[v].prototype.icon;
            button.appendChild(img);
            button.control = controls[v];

            toolbox.appendChild(button);
        }

        toolbox.addEventListener('click', function(evt) {
            if(evt.target.tagName !== 'SIX-BUTTON') return;

            var active = toolbox.querySelector('six-button[active]');
            if(active) active.removeAttribute('active');

            evt.target.setAttribute('active', '');
            this.activeControl = evt.target.control;

            if(this.activeControl) {
                canvas.style.setProperty('cursor', 'crosshair');
            } else {
                canvas.style.setProperty('cursor', 'default');
            }
        }.bind(this), false);

        canvas.addEventListener('click', function(evt) {
            if(this.activeControl) return;

            var clientRect = evt.target.getBoundingClientRect();
            this.selectedControl = this.hitTest({ x: evt.pageX - clientRect.left, y: evt.pageY - clientRect.top });

            var ctx = canvas.getContext('2d');

            ctx.save();
            this.draw(ctx, {width: canvas.width, height: canvas.height});
            ctx.restore();
        }.bind(this), false);

        var mousedown, mousemove, mouseup;
        canvas.addEventListener('mousedown', function(evt) {
            var clientRect = evt.target.getBoundingClientRect();

            var position = {
                x: evt.pageX - clientRect.left,
                y: evt.pageY - clientRect.top
            };

            if(this.activeControl) {
                var node = this.doc.createElement(this.activeControl.prototype.tagName);
                var control = new this.activeControl(this, node);
                control.position = position;



                var previousSelection = this.selectedControl;
                this.selectedControl = null;

                if (control.minSize) {
                    control.size = {
                        width: control.minSize.width,
                        height: control.minSize.height
                    };
                } else {
                    control.size = {
                        width: 0,
                        height: 0
                    };
                }

                var startControl = this.hitTest(control.position);
                if(!control.beginDrawing(startControl)) {
                    this.selectedControl = previousSelection;
                    return;
                }

                var ctx = canvas.getContext('2d');

                ctx.save();
                this.draw(ctx, {width: canvas.width, height: canvas.height});
                ctx.restore();
                ctx.save();
                ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
                control.drawFocusRectangle(ctx);
                ctx.restore();
                ctx.save();
                ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
                control.draw(ctx);
                ctx.restore();

                window.addEventListener('mousemove', mousemove = function (evt) {

                    var size = {
                        width: evt.pageX - position.x - clientRect.left,
                        height: evt.pageY - position.y - clientRect.top
                    };

                    if (control.minSize) {
                        size.width = Math.max(control.minSize.width, size.width);
                        size.height = Math.max(control.minSize.height, size.height);
                    }
                    if (control.maxSize) {
                        size.width = Math.min(control.maxSize.width, size.width);
                        size.height = Math.min(control.maxSize.height, size.height);
                    }

                    control.size = size;

                    var ctx = canvas.getContext('2d');

                    ctx.save();
                    this.draw(ctx, {width: canvas.width, height: canvas.height});
                    ctx.restore();
                    ctx.save();
                    ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
                    control.drawFocusRectangle(ctx);
                    ctx.restore();
                    ctx.save();
                    ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
                    control.draw(ctx);
                    ctx.restore();
                }.bind(this), false);

                window.addEventListener('mouseup', mouseup = function (evt) {
                    window.removeEventListener('mousemove', mousemove, false);
                    window.removeEventListener('mouseup', mouseup, false);

                    var endControl = this.hitTest({
                        x: evt.pageX - clientRect.left,
                        y: evt.pageY - clientRect.top
                    });
                    if(!control.endDrawing(startControl, endControl)) {
                        this.selectedControl = previousSelection;
                    } else {
                        this.controls.push(control);
                        this.selectedControl = control;
                        this.activeControl = null;
                        toolbox.querySelector('six-button[active]').removeAttribute('active');
                        toolbox.querySelector('six-button:first-child').setAttribute('active', '');
                        canvas.style.setProperty('cursor', 'default');

                        control.layout();

                        node.setAttribute('frame', parseInt(control.position.x, 10) + ', ' + parseInt(control.position.y, 10) + ', ' + parseInt(control.size.width, 10) + ', ' + parseInt(control.size.height, 10));

                        this.doc.documentElement.appendChild(node);

                        if(node.previousSibling && node.previousSibling.nodeType === Node.TEXT_NODE) {
                            node.previousSibling.textContent = '\n  \n  ';
                        } else {
                            node.parentNode.insertBefore(this.doc.createTextNode('\n  \n   '), node);
                        }

                        if(control.comment) {
                            node.parentNode.insertBefore(this.doc.createComment(' ' + control.comment + ' '), node);
                            node.parentNode.insertBefore(this.doc.createTextNode('\n  '), node);
                        }

                        if(node.nextSibling) {
                            this.doc.documentElement.appendChild(this.doc.createTextNode('\n  \n  '));
                        } else {
                            this.doc.documentElement.appendChild(this.doc.createTextNode('\n  \n'));
                        }
                        this.saveMarkup();
                    }

                    var ctx = canvas.getContext('2d');
                    ctx.save();
                    this.draw(ctx, {width: canvas.width, height: canvas.height});
                    ctx.restore();

                }.bind(this), false);

            } else if(this.selectedControl && this.selectedControl === this.hitTest(position)) {
                canvas.style.setProperty('cursor', 'move');

                window.addEventListener('mousemove', mousemove = function (evt) {

                    var size = {
                        width: evt.pageX - position.x - clientRect.left,
                        height: evt.pageY - position.y - clientRect.top
                    };

                    this.selectedControl.position = {
                        x: this.selectedControl.position.x + size.width,
                        y: this.selectedControl.position.y + size.height
                    };

                    this.selectedControl.position.x = this.selectedControl.position.x - this.selectedControl.position.x % 10;
                    this.selectedControl.position.y = this.selectedControl.position.y - this.selectedControl.position.y % 10;

                    position = {
                        x: position.x + size.width,
                        y: position.y + size.height
                    };

                    position.x = position.x - position.x % 10;
                    position.y = position.y - position.y % 10;

                    this.selectedControl.layout();

                    var ctx = canvas.getContext('2d');

                    ctx.save();
                    this.draw(ctx, {width: canvas.width, height: canvas.height});
                    ctx.restore();
                }.bind(this), false);

                window.addEventListener('mouseup', mouseup = function (evt) {
                    window.removeEventListener('mousemove', mousemove, false);
                    window.removeEventListener('mouseup', mouseup, false);
                    canvas.style.setProperty('cursor', 'default');

                    this.selectedControl.node.setAttribute('frame', this.selectedControl.position.x + ', ' + this.selectedControl.position.y + ', ' + this.selectedControl.size.width + ', ' + this.selectedControl.size.height);
                    this.saveMarkup();
                }.bind(this), false);
            }
        }.bind(this), false);

        this.layout();
    },

    onFileChange: function(content) {
        if(this.get('isSaving')) return;

        var parser = new DOMParser();
        parser.preserveWhiteSpace = true;

        try {
            if(!content) content = '<?xml version="1.0" encoding="utf-8"?>\n<map>\n</map>';
            this.doc = parser.parseFromString(content, 'text/xml');
        } catch(e) {
            this.doc = parser.parseFromString('<?xml version="1.0" encoding="utf-8"?>\n<map>\n</map>', 'text/xml');
        }


        this.controls = [];

        for(var i = 0; i < this.doc.documentElement.childNodes.length; i++) {
            var node = this.doc.documentElement.childNodes[i];

            if(node.nodeName in controls) {
                var control = new controls[node.nodeName](this, node);
                this.controls.push(control);
            }
        }

        for(var i = 0; i < this.controls.length; i++) {
            this.controls[i].ready();
        }
    },

    saveMarkup: function() {
        var serializer = new XMLSerializer();
        var document = serializer.serializeToString(this.doc);
        document = document.replace(/(<\?[^\?]+\?>)/g, '$1\n');

        this.set('isSaving', true);
        this.set('file.content', document);
        this.set('isSaving', false);
    },

    hitTest: function(point) {
        for(var i = this.controls.length - 1; i >= 0; i--) {
            var control = this.controls[i];
            var hit = control.hitTest(point);
            if(hit) return hit;
        }
    },

    attachedCallback: function() {
        this.layout();
        window.addEventListener('resize', this.layout.bind(this), false);
    },

    draw: function(ctx, size) {
        ctx.save();
        ctx.clearRect(0, 0, size.width, size.height);
        var pattern = ctx.createPattern(this.gridCanvas, 'repeat');
        ctx.fillStyle = pattern;
        ctx.fillRect(0, 0, size.width + 1, size.height + 1);
        ctx.restore();

        for(var i = 0; i < this.controls.length; i++) {
            ctx.save();
            ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
            size.width /= window.devicePixelRatio || 1;
            size.height /= window.devicePixelRatio || 1;
            this.controls[i].draw(ctx);
            ctx.restore();
        }

        if(this.selectedControl) {
            ctx.save();
            ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
            size.width /= window.devicePixelRatio || 1;
            size.height /= window.devicePixelRatio || 1;
            this.selectedControl.drawFocusRectangle(ctx);
            ctx.restore();
        }
    },

    layout: function() {
        var toolbox = this.shadowRoot.querySelector('.toolbox');
        var buttons = toolbox.querySelectorAll('six-button');
        var buttonStyle = document.defaultView.getComputedStyle(buttons[0]);
        var width = buttons[0].offsetWidth + parseInt(buttonStyle.marginLeft, 10) + parseInt(buttonStyle.marginRight, 10);
        var height = buttons[0].offsetHeight + parseInt(buttonStyle.marginTop, 10) + parseInt(buttonStyle.marginBottom, 10);
        var toolboxStyle = document.defaultView.getComputedStyle(toolbox);
        var padding = 3;
        toolbox.style.removeProperty('-webkit-flex-basis');
        toolbox.style.setProperty('-webkit-flex-basis', padding + width * Math.ceil(buttons.length / (toolbox.offsetHeight / height)) + 'px');

        var canvas = this.shadowRoot.querySelector('canvas');
        var clientRect = canvas.getBoundingClientRect();
        canvas.width = clientRect.width * (window.devicePixelRatio || 1);
        canvas.height = clientRect.height * (window.devicePixelRatio || 1);
        var ctx = canvas.getContext('2d');

        this.draw(ctx, {width: canvas.width, height: canvas.height});
    }
});