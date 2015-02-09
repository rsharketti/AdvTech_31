// JavaScript Document


//make instances of our coin class.
var coin1 = new Coin();
var coin2 = new Coin();
var coin3 = new Coin();
var coin4 = new Coin();
var coin5 = new Coin();


/**
 * The coin class is a blueprint for each coin we generate
 * @author Randi Sharketti
 * @version 1.0, Feb 2015
 */
 
function Coin(){
	//properties: can have different values for each coin. 		
	//start empty:
	this.x;//position on page left to right.
	this.y;//position on page top to bottom.
	//property that represents the coins physical presence on the page.
	this.item_on_page;
	/**
	 *the Create method runs commands that put a graphic on the page.
	 */
	 this.create = function(){
		//create a tag on the page. 
		this.item_on_page = document.createElement("img");
		//set up the img characteristics
		this.item_on_page.src="img/coin.gif";
		this.item_on_page.style.position = "absolute";
		//Assume the game area is 800x600. Generate random x,y
		this.x = Math.floor(Math.random()*500);
		this.y = Math.floor(Math.random()*400);
		//use that random number to assign the items left css property
		this.item_on_page.style.left = this.x + "px";
		//use that random number to assign the items top css property
		this.item_on_page.style.top = this.y + "px";
		//make the image tag appear on the page.
		document.body.appendChild(this.item_on_page);
	 }
}



onload=init;
function init(){
	coin1.create();
	coin2.create();
	coin3.create();
	coin4.create();
	coin5.create();
}
