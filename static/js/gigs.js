
const gigData = {
  // DO NOT TOUCH THIS =>
  url: "./static/images/fiction.jpg",
  shop: "https://www.eventbrite.com/o/benedict-cork-17515705636?s=92025368",
  // <=
  // THIS IS THE TITLE OF THE BLOCK =>
  title: "Fiction Sessions - Benedict Cork & Friends"
  // <=
};
 // PLEASE WHILE ADDING GIGS, WRITTE THEM EXACTLY LIKE THIS:

 // gig4: {
 //   text: "Thursday February 28th at Fiction Studios, London",
 //   limit: "28/June/2019"
 // },


 // SIMPLY COPY THE FORMAT AND WRITTE YOUR NEXT ONE LIKE 'GIGX'
 // ADD THE TITLE IN 'TEXT'
 // AND THE DATE OF EXPIRY IN 'LIMIT'


 const gigs = {

     gig1: {
       text: "Thursday February 28th at Fiction Studios, London",
       limit: "28/February/2019"
     },

    gig2: {
      text: "Thursday March 21st at Fiction Studios, London",
      // THIS WILL BE THE DATE WHEN THE GIG WILL BE REMOVED FROM THE PAGE
      limit: "21/March/2019"
    },

    gig3: {
      text: "Thursday April 25th at Fiction Studios, London",
      limit: "25/April/2019"

    },

    gig4: {
      text: "Thursday May 23rd at Fiction Studios, London",
      limit: "22/May/2019"
    },


};



let spanTitle = document.getElementById('concert-title-json');
let buttonLink = document.getElementById('atag-concerts');
let imgEvents = document.getElementById('concert-img-json');
let urlEvents = gigData["url"];
let urlShop = gigData["shop"];
let titleEvents = gigData["title"];
let myArray = [];
let today = new Date();
function formatDate(date) {
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];
  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();
  return day + '/' + monthNames[monthIndex] + '/' + year;
}

console.log(formatDate(today));



for (var key in gigs) {
	if (gigs.hasOwnProperty(key)) {
    if(gigs[key]["limit"] != formatDate(today))
		myArray.push(gigs[key]["text"]);
  	 }
};


var array = ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5', 'Slide 6', 'Slide 7', 'Slide 8', 'Slide 9'],
  // Reduce will iterate over all the array items and returns a single value.
  listItems = myArray.reduce((result, item) => {
    // Add a string to the result for the current item. This syntax is using template literals.
    result += `<li>${item}</li>`;
    // Always return the result in the reduce callback, it will be the value or result in the next iteration.
    return result;
  }, ''); // The '' is an empty string, it is the initial value result.
  // Get the element from the DOM in which to display the list, this should be an ul or ol element.
  resultElement = document.getElementById('result');

// Set the inner HTML
resultElement.innerHTML = listItems;
imgEvents.src = urlEvents;
spanTitle.innerHTML = titleEvents;
buttonLink.href = urlShop;


