/*
 * JiaJia Chen
 * ISTE-340
 * Professor Goldman				
 * 3/7/2021						
*/					
						

// var variable
var depth = 0;
var divImg;
var img;
var img2;
var img3;


// create form, everything else will append inside this form
// This form will append to the body.
var form = document.createElement("form");
	

	/*
	 * display() method is call in the body of index.html
	 * create form and run
	 * for the minimal html requirement, inside html, it will have a function
	 * call on this display(). This is like the main function to run
	 */ 
	function display(){

	// create h1 and append to the body, html
	// h1 explain my topic which is Anime
	var h1 = document.createElement('h1');
        var textNode = document.createTextNode("Anime");
	h1.appendChild(textNode);
	
	// create div to separate with others column
	// This is use for the javascript DHTML slide show
	// In here, I create the element tag I need and call on the slide show
	var divBack = document.createElement('div');
	var back = document.createTextNode("Anime Image Gallery");
	divBack.appendChild(back);
	divBack.id="picc";
        var imgBack= document.createElement("img");
	imgBack.id="slideshow";
	imgBack.src="assets/media/kid1.jpg";
	imgBack.alt="background image";
	divBack.appendChild(imgBack);
	document.body.append(divBack);
	// this is the function to show the image gallery. Animation
	// Animation on top of the page. Repeately without any click
	fun();

	// set the form tag id, and attributes, use for later where everything else will append to this
        form.id ="formId";
	form.setAttribute("onsubmit", "getInput()");
	
	// create input type name for the requirement
	// ask for the user name and can be store in the local storage
	// use for print out
	var textNode = document.createTextNode("Enter your name:  ");
	const fName= document.createElement("label"); //create label  tag

	//set asttributes and then append to the form
  	fName.setAttribute("for", "fname");
	const fName1= document.createElement("input");  // create for the name input
	fName1.setAttribute("type", "text");
	fName1.setAttribute("id", "fname");
	fName.appendChild(textNode);
	form.appendChild(fName);
	form.appendChild(fName1);
	form.appendChild(h1);

	// create div and set id attributes then append to the form
	const selectDiv = document.createElement("div");
        selectDiv.id ="selectDiv";
	form.appendChild(selectDiv);
        
	// create submit button and set id attributes then append to the form
	// This button will use for submit user final answer and store to local storage
	const submitButton = document.createElement("input");
  	submitButton.setAttribute("type", "submit");
	submitButton.setAttribute("value", "Submit");
	form.appendChild(submitButton);
	
	// create clear button for the local storage and set id attributes then append to the form
	// this clear button can clear user local storage, also can clear their selection
   	const clear = document.createElement('button');
	clear.setAttribute("type", "button");
   	var cleartext = document.createTextNode("Clear");  // append to the form
   	clear.appendChild(cleartext);
   	clear.setAttribute("id", "clear");
   	clear.setAttribute("onclick", "clear1()");  // function when user click on the button
	form.appendChild(clear);
	
	// Use for later javscript animation, avoid remove become null
	img = document.createElement("img"); 
	img2 = document.createElement("img"); 
	img3 = document.createElement("img"); 
	divImg = document.createElement("div");
	divImg.appendChild(img);
	divImg.appendChild(img2);
	divImg.appendChild(img3);
	img.id = "con";
	img2.id = "con";
	img3.id = "con";
	
	// append form to the body
	document.body.append(form);

	// run the select option and create question
	// This method is all where the selction is being create
	// create dynamtic and without hardcode the data.
	createSelectElement("Main");	
	
	// print out the local storage
	// Design in a sigle line. first is the user name follow by their selection option choice
	var h4 = document.createElement('h4');
        var textNode5 = document.createTextNode("Local Storage History");  // name of the storage which is at the bottom of the page
	h4.appendChild(textNode5);
	document.body.append(h4);
	for (var i=0;i<localStorage.length;i++){
		var p = document.createElement('p');
        	var data = document.createTextNode("Name: "+ JSON.parse(localStorage.getItem(localStorage.key(i)))[0]+"    | ");
		p.appendChild(data);
		var data1= document.createTextNode("Option 1: "+ JSON.parse(localStorage.getItem(localStorage.key(i)))[1]+"    | ");
       		p.appendChild(data1);
		var data2 = document.createTextNode("Option 2: "+ JSON.parse(localStorage.getItem(localStorage.key(i)))[2]+"    | ");
       		p.appendChild(data2);
		var data3 = document.createTextNode("Option 3: "+ JSON.parse(localStorage.getItem(localStorage.key(i)))[3]);
       		p.appendChild(data3);
		document.body.append(p);
		}
	
}

/*
 * check for validate
 * user have to choose all the option and enter the name 
 * before submit, otherwise the page will refresh
 */
function validateForm(){
"use strict";
var validName = true;  // first set to true

	// if find empty, refresh, and show alert to enter name
   if(document.getElementById("fname").value == ''){
	alert("Please enter your name");
	  validName=false; // didn't pass through, find empty, return false
	 }
	// if user didn't go through all the option before submit
	// the system will alert the user and refresh page to start over
   else if (document.getElementsByClassName("0")[1].value == 'Select an Option' ||
	document.getElementsByClassName("1")[1].value == 'Select an Option' ||
	document.getElementsByClassName("2")[1].value == 'Select an Option'){
		alert("Please choice an option");
	  	validName=false;  // didn't pass through the validate which user can not submit their choice
	}
   // if all condition meet, validate true and can be submit
   else 
       {
       	validName = true;  // once all input and selection is being made, pass the validation
       }

  return (validName); // return to the getInput where user can submit their form
}


// clear local storage and refresh the page to update
function clear1(){
	localStorage.clear();
	location.reload();
}

/*
 * store the user input for their name and the select option
 * then push into the local storage 
 * before push to local storage, the data will need to validate 
 */
function getInput (){
	"use strict";
	var local = [];  // I use array to store each user input, in this way, the data will store together per user
	var d = new Date(); // this two line code is for unique key value
	var n = d.getTime(); // avoid when key are the same and being replace
	if(validateForm()){
		var first= document.getElementById("fname").value; // store name
		var class0 = document.getElementsByClassName("0")[1].value; //store option 1
		var class1 = document.getElementsByClassName("1")[1].value; //store option 2
		var class2 = document.getElementsByClassName("2")[1].value; // store option3
		// push all into an array. Then store array into the local storage
		local.push(first);
    		local.push(class0);
		local.push(class1);
		local.push(class2);
		// One key per each user. 
		localStorage.setItem(n,JSON.stringify(local));

	}
	

}


/*
 * This function will show all the selction option
 * create Daynamic 
 */
function createSelectElement(dataKey){

	const choiceData = selectInfo.choices;
        const dataLength = Object.keys(choiceData).length;

            for (var i = 0; i < dataLength; i++) {
                // If choice does not match key, skip this data point
                if (choiceData[i].key != dataKey)
                    continue;
                // Creates a header to label the specific select menu
                var h2 = document.createElement('h2');
                var textNode = document.createTextNode(choiceData[i].description);
                h2.className = choiceData[i].depth;
                h2.appendChild(textNode);
                selectDiv.appendChild(h2);
        
                // Creates the select list element
                var selectList = document.createElement('select');
                selectList.id = choiceData[i].key;
                selectList.name = choiceData[i].description;
                selectList.className = choiceData[i].depth;
                selectDiv.appendChild(selectList);
        
                // Creates null Select option
                var nullOption = document.createElement('option');
                nullOption.text = "Select an Option";
                nullOption.selected = this;
                nullOption.disabled = true;
                selectList.appendChild(nullOption);                
        
                // Creates option 1
                var newOption1 = document.createElement('option');
                newOption1.value = choiceData[i].option_1;
                newOption1.text = choiceData[i].option_1;
                selectList.appendChild(newOption1);
        
                // Creates option 2
                var newOption2 = document.createElement('option');
                newOption2.value = choiceData[i].option_2;
                newOption2.text = choiceData[i].option_2;
                selectList.appendChild(newOption2);
        	
                // Hooks up an event to reload the choices whenever the select value is changed
                //selectList.onchange
                selectList.addEventListener("change", function () {
		     selectInfo.choices.forEach(element =>{
				if(element.key == selectList.value){   // if user choose option inside the data
					var num = element.depth;//current depth
						if(num <= depth){	// if user change idea change the previous option
       			 				var elem= document.getElementsByClassName(num);

							// user go back to the first option
							// remove the botton 2 select option 
							if(num == 1){ 
								elem = document.getElementsByClassName("2");
								while (elem.length > 0 ){
    								elem[0].remove();
								}//while
								
								elem = document.getElementsByClassName(num);
								while (elem.length > 0 ){
    								elem[0].remove();
								}// while
							}// if(num==1)
							
							while (elem.length > 0 )
    								elem[0].remove();
								
    						}		
					depth=num;
					
					// if user didn't change previos selection, go direct down
					// create next select option
					createSelectElement(element.key);
					
					}

			}); // selectionInfo
				
				// after user choose their option, show their selection effect
				if(depth==2){
					img = document.createElement("img"); 
					img2 = document.createElement("img");
					img3 = document.createElement("img");
					divImg = document.createElement("div");
					divImg.appendChild(img);
					divImg.appendChild(img2);
					divImg.appendChild(img3);
					img.id = "con";
					img2.id = "con";
					img3.id = "con";
					form.appendChild(divImg);
					showEffect();	}
		  
                });
            
        }; //createElement



/*
 * showEffect will display the option the user click
 * final result will be either images or a video clip
 * some animation to the image
 */
function showEffect(){

		// check for user select Another anime
		if (document.getElementsByClassName("1")[1].value == "Another"){

			// if user choose Another and want to know image
			if(document.getElementsByClassName("2")[1].value == "Image"){
				// delete any previos images or video
				for(var i=0;i<3;i++){
					document.getElementById("con").remove();
				}
			
				// set attributes and create img tag
				img.setAttribute("id", "con");
				img.className="2 pic";
				img.setAttribute("src", "assets/media/another1.jpg");

				img2.setAttribute("id", "con");
				img2.className="2 pic";
				img2.setAttribute("src", "assets/media/another1.jpg");


				img3.setAttribute("id", "con");
				img3.className="2 pic";
				img3.setAttribute("src", "assets/media/another1.jpg");

				// append to the div and inside the form
				divImg.id="anotherImg";
				divImg.className="pic-container";
				divImg.appendChild(img);
				divImg.appendChild(img2);
				divImg.appendChild(img3);
				selectDiv.appendChild(divImg);
			}// close if for image

			// if user choose Another and want to see a clip
			if(document.getElementsByClassName("2")[1].value == "A clip from the anime"){
				// delete any previos selection
				for(var i=0;i<3;i++){
					document.getElementById("con").remove();
				}
				// create video tag and play
				const divVideo = document.createElement("div");
				const video = document.createElement("video");
				video.id="con";
				video.className="2 videoSize";
				video.controls = "controls";
				const source = document.createElement("source");
				source.src = "assets/media/Another Opening.mp4";
				source.type = "video/mp4";
				divVideo.appendChild(video);
				video.appendChild(source);
				selectDiv.appendChild(divVideo);
			}// end of if for clip
		}// end for another section
	
	// if user pick Corpse Party Tortured Souls
	if (document.getElementsByClassName("1")[1].value == "Corpse Party Tortured Souls"){
		// if user pick Corpse Party Tortured Souls and want to know image
		if( document.getElementsByClassName("2")[1].value == "Image"){
			// delete any previous selection
			for(var i=0;i<3;i++){
				document.getElementById("con").remove();
			}
			// set attribute for the images
			img.setAttribute("id", "con");
			img.className="2 pic";
			img.setAttribute("src", "assets/media/party1.jpg");


			img2.setAttribute("id", "con");
			img2.className="2 pic";
			img2.setAttribute("src", "assets/media/party1.jpg");


			img3.setAttribute("id", "con");
			img3.className="2 pic";
			img3.setAttribute("src", "assets/media/party1.jpg");

			// append to the form
			divImg.id="anotherImg";
			divImg.className="pic-container";
			divImg.appendChild(img);
			divImg.appendChild(img2);
			divImg.appendChild(img3);
			selectDiv.appendChild(divImg);
		
		}// end for image

		// if user pick Corpse Party Tortured Souls and want to see the clip
		else if(document.getElementsByClassName("2")[1].value == "A clip from the anime"){
			// delete any previous selection
			for(var i=0;i<3;i++){
				document.getElementById("con").remove();
			}
			// create the video and display
			const video = document.createElement("video");
			const divVideo = document.createElement("div");
			video.id="con";
			video.controls = "controls";
			video.className = "2 videoSize";
			const source = document.createElement("source");
			source.src = "assets/media/party.mp4";
			source.type = "video/mp4";
			divVideo.appendChild(video);
			video.appendChild(source);
			selectDiv.appendChild(divVideo);
		}//end for clip

	}//end for Corpse Party Tortured Souls
	

		// if user pick Gakuen Babysitters
		if (document.getElementsByClassName("1")[1].value == "Gakuen Babysitters"){
			// pick Gakuen Babysitters and select images
			if(document.getElementsByClassName("2")[1].value == "Image"){
				for(var i=0;i<3;i++){ // delete previous option
					document.getElementById("con").remove();
				}

			// set element and attributes
			img.setAttribute("id", "con");
			img.className="2 pic";
			img.setAttribute("src", "assets/media/kid1.jpg");

			img2.setAttribute("id", "con");
			img2.className="2 pic";
			img2.setAttribute("src", "assets/media/kid1.jpg");


			img3.setAttribute("id", "con");
			img3.className="2 pic";
			img3.setAttribute("src", "assets/media/kid1.jpg");

			// append to the form
			divImg.id="anotherImg";
			divImg.className="pic-container";
			divImg.appendChild(img);
			divImg.appendChild(img2);
			divImg.appendChild(img3);
			selectDiv.appendChild(divImg);
			
		}// end of the img

		// if user pick Gakuen Babysitters and select for the clip
		else if(document.getElementsByClassName("2")[1].value == "A clip from the anime"){
			for(var i=0;i<3;i++){ // delete previous option
				document.getElementById("con").remove();
			}
			// create element and display the video
			const video = document.createElement("video");
			const divVideo = document.createElement("div");
			video.id="con";
			video.controls = "controls";
			video.className= "2 videoSize";
			const source = document.createElement("source");
			source.src = "assets/media/kid.mp4";
			source.type = "video/mp4";
			divVideo.appendChild(video);
			video.appendChild(source);
			selectDiv.appendChild(divVideo);
		}//end of clip
	}//end of the Gakuen Babysitters
	

	// if user pick Jingai-san no Yome
	if (document.getElementsByClassName("1")[1].value == "Jingai-san no Yome"){
		// user pick Jingai-san no Yome and want to know image
		if(document.getElementsByClassName("2")[1].value == "Image"){
			for(var i=0;i<3;i++){ // delete previous selection
				document.getElementById("con").remove();
			}
			// set attributes and display the images
			img.setAttribute("id", "con");
			img.className="2 pic";
			img.setAttribute("src", "assets/media/not1.jpg");
			
			img2.setAttribute("id", "con");
			img2.className="2 pic";
			img2.setAttribute("src", "assets/media/not1.jpg");
			

			img3.setAttribute("id", "con");
			img3.className="2 pic";
			img3.setAttribute("src", "assets/media/not1.jpg");
						

			// append to the form
			divImg.id="anotherImg";
			divImg.className="pic-container";
			divImg.appendChild(img);
			divImg.appendChild(img2);
			divImg.appendChild(img3);
			selectDiv.appendChild(divImg);


			

			
		}// end of the img

		// if user pick Jingai-san no Yome and want to see clip
		else if(document.getElementsByClassName("2")[1].value == "A clip from the anime"){
			for(var i=0;i<3;i++){  //delete previous
				document.getElementById("con").remove();
			}
		// create and display the video
		const video = document.createElement("video");
		const divVideo = document.createElement("div");
			video.id="con";
			video.controls = "controls";
			video.className="2 videoSize";
			const source = document.createElement("source");
			source.src = "assets/media/yome.mp4";
			source.type = "video/mp4";
			divVideo.appendChild(video);
			video.appendChild(source);
			selectDiv.appendChild(divVideo);
		}//end of the clip
	}// end of Jingai-san no Yome

	
}//showeffect

}



/*
 * This function show the javascript DHTML 
 * Slide show for all image
 * Image gallery for the anime, show repeatly and automatically
 */

function fun(){
document.getElementById("slideshow").src="assets/media/party1.jpg";
//Create an array of images 
var imageArray = ["assets/media/kid1.jpg", "assets/media/not1.jpg","assets/media/kid1.jpg","assets/media/another1.jpg","assets/media/party1.jpg"];

//Save total size of array to variable arraySize
var arraySize = imageArray.length;

//Set wait time between slides in milliseconds 
setInterval(runit, 2000);

var x = 1; //Used to count up to arraySize
var back;
//Function runit play slideshow when called 
function runit() {
    //Set image to next picture in image array
    back= document.getElementById('slideshow').src = imageArray [x];
	console.log(imageArray[0]);

    //Increase count by 1
    x++;

    //If count has reached the last index of imageArray than set count back to starting index.
    if (x === arraySize) {
        x = 0;
    }
}

}

