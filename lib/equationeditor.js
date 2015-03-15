/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 * 
 * Options:
 * 
 * id: DOM id of the container element
 * Width: width of the equation editor area, if not specified it will take the size of the container element
 */

var equationeditor = function(optionsArray){
    
    var options = optionsArray[0];
    this.width = options.width ? options.width : '100%';
    this.canvas = document.createElement("canvas");
    this.context = this.canvas.getContext('2d');
    
    var self = this;
    
    //initialization of the equation editor
    this.init = function(){
        self.element = options.id ? document.getElementById(options.id) : document.getElementsByTagName("body")[0];
        self.element.appendChild(self.canvas);
        self.canvas.width = self.width;
        self.context.fillStyle = "#000";
        self.context.font = "bold 16px Arial";
        self.context.fillText("Zibri", 100, 100);
    }
    
    document.addEventListener("readystatechange", function() { 
        self.init();
    }, false);
}

