//complete this code
class Rectangle {
	constructor(width, height){
		this.width = newwidth;
		this.height = newheight;
	}
	get newwidth(){
		return this.width;
		
	}
	get newheight(){
		return this.height;
	}

	getArea(){
		return this.width * this.height;
	}
	
	
}

class Square extends Animal {
	constructor(side){
		super(width,height)
	}
	 getPerimeter() {
    return 4 * this.width;
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
