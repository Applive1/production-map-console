'use strict';

function commandLineBlock (type) {
    this.type = type;
    this.text = type;
    this.methods = [
    	{
    		name: "execute commands",
    		params:
	    		[
	    			{
	    				name: 'COMMANDS',
	    				type: 'String'
	    			}
	    		],
	    	actionString: "COMMANDS"
    	},
    	{
    		name: "execute file",
    		params:
	    		[
	    			{
	    				name: 'PATH',
	    				type: 'String'
	    			}
	    		],
	    	actionString: "PATH"
    	}
    ];
    this.url = "localhost:8080";
}

commandLineBlock.prototype.getMethods = function() {
    return this.methods;
};
commandLineBlock.prototype.getType = function() {
    return this.type;
};
commandLineBlock.prototype.getText = function() {
    return this.text;
};
commandLineBlock.prototype.setText = function(text) {
    return this.text = text;
};