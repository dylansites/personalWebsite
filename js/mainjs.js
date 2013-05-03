var iterate = 1;
var mainfolder;
var end;
var images = new Array()
var backgroundImage = new Array();


document.onkeydown = checkKey; //checks the value of a key anytime a key is pressed


function loadFolder(folder, endNumber){ //called onLoad in body
	mainfolder = folder;	//change the "mainfolder" variable to equal the first argument received
	end = endNumber;		//change the "end" variable to equal the first argument received2
	images.length = 0;		//clear the images array from existing content
	for(a = 1; a <= end; a++){		//cycle through the amount of images that are required for the page
		images[a] = new Image();	//add an image to the "images" array
		images[a].src = "images/" + mainfolder + a +".jpg";	//set the source of the image
	}
	if(backgroundImage.length == 0){
	backgroundImage[0]= new Image();
	backgroundImage[0].src = "css/background2.jpg";
	}
}

//This function is for the back arrow (display the pic that came before)
function prevImage(){
	iterate--;	//decrease the "iterate" variable by 1
	if(iterate < 1){	//if iterate is less than one ... 
		iterate = end;	//set it equal to the "end" variable
	}
	var newImage = document.getElementById("mainimageid");
	newImage.src = "images/" + mainfolder + iterate + ".jpg"; //change the source of the main image
	var newCount = "<span>"+ iterate + " </span>";
	document.getElementById("countChange").innerHTML = newCount;
}

//This function is for the forward arrow (display the pic that comes next)
function nextImage(){
	iterate++;	//increase the "iterate" variable by 1
	if(iterate > end){	//if "iterate" is greater than the "end" variable
		iterate = 1;
	}
	var newImage = document.getElementById("mainimageid");
	newImage.src = "images/" + mainfolder + iterate + ".jpg";//change the source of the main image
	var newCount = "<span>"+ iterate + " </span>";
	document.getElementById("countChange").innerHTML = newCount;
}

//Check if there was a key pressed
function checkKey(e) {
	e = e || window.event;
    if(e.keyCode == '37'){//if left arrow key is pressed, goes back one image
    	prevImage();
    }
    if(e.keyCode == '39'){//if right arrow key is pressed goes forward on image
    	nextImage();
    }
}

function showProjectInfo(){
	$("#mainimageid").fadeTo(500, .05);
	$("#projectInfo").fadeTo(500, 1);
	$("#closeProject").fadeTo(500, 1);
	$("#aboutProject").hide();
}

function hideProjectInfo(){
	$("#mainimageid").fadeTo(500, 1);
	$("#projectInfo").fadeTo(500, 0);
	$("#closeProject").hide();
	$("#aboutProject").fadeTo(500, 1);
}		