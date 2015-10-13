'use strict';

function FileServerBlock (type) {
    this.type = type;
    this.text = type;
    this.methods = 
        [
            {
                name: "cp",
                params:
                    [
                        {
                            name: 'SOURCE_PATH',
                            type: 'String'
                        },
                        {
                            name: 'DEST_PATH',
                            type: 'String'
                        },
                        {
                            name: 'FLAGS',
                            type: 'String'
                        }
                    ],
                actionString: "cp FLAGS SOURCE_PATH DEST_PATH"
            },
            {
                name: "mkdir",
                params:
                    [
                        {
                            name: 'PATH',
                            type: 'String'
                        },
                        {
                            name: 'FLAGS',
                            type: 'String'
                        }
                    ],
                actionString: "mkdir FLAGS PATH"
            },
            {
                name: "mv",
                params:
                    [
                        {
                            name: 'SOURCE_PATH',
                            type: 'String'
                        },
                        {
                            name: 'DEST_PATH',
                            type: 'String'
                        },
                        {
                            name: 'FLAGS',
                            type: 'String'
                        }
                    ],
                actionString: "mv FLAGS SOURCE_PATH DEST_PATH"
            },
            {
                name: "rm",
                params:
                    [
                        {
                            name: 'PATH',
                            type: 'String'
                        },
                        {
                            name: 'FLAGS',
                            type: 'String'
                        }
                    ],
                actionString: "rm FLAGS PATH"
            }
        ],
    this.url = "localhost:8080"
}

FileServerBlock.prototype.getMethods = function() {
    return this.methods;
};
FileServerBlock.prototype.getType = function() {
    return this.type;
};
FileServerBlock.prototype.getText = function() {
    return this.text;
};
FileServerBlock.prototype.setText = function(text) {
    return this.text = text;
};