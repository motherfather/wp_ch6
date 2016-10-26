// Rectangle klass 정의
var Rectangle = function(x1, y1, x2, y2, backgroundColor) {
	this.x1 = x1;
	this.y1 = y1;
	this.x2 = x2;
	this.y2 = y2;
	this.backgroundColor = backgroundColor;
}

Rectangle.prototype.borderColor = "#323";
Rectangle.prototype.show = function () {
	document.write(
			"<div style=\"" + "position:absolute;" + "left:" + this.x1 + "px;" + "top:" + this.y1
			+ "px;" + "width:" + (this.x2-this.x1) + "px;" + "height:" + (this.y2-this.y1)
			+ "px;" + "background-color:" + this.backgroundColor + ";"
			+ "border:3px solid" + this.borderColor + ";\"></div>");
}