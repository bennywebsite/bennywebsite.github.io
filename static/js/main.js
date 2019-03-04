
/*
*=================================
* Hugo UILite Portfolio v0.8
*=================================
*
* Free version https://uicard.io/products/hugo-uilite
* Pro version https://uicard.io/products/hugo-uilite-pro
* Demo https://demo.uicard.io/hugo-uilite-portfolio-demo/
*
* Coded By UICardio
*
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*
*/




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
    "1", "2", "3",
    "4", "5", "6", "7",
    "8", "9", "10",
    "11", "12"
  ];
  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();
  return day + '/' + monthNames[monthIndex] + '/' + year;
}

console.log(formatDate(today));
formattedDate = formatDate(today);
// var d1 = Date.parse(formattedDate);

let newArray = Object.entries(gigs)


// for (var key of gigs) {
//
// 	if (gigs.hasOwnProperty(key)) {
//     var d2 = Date.parse(gigs[key]["limit"]);
//     if ( d2 > d1 ) {
//       myArray.push(gigs[key]["text"]); console.log(myArray)}
//  dates must not be a string to be compared, they can be parsed into a numeric
//   	 }
// };

for (var i = 0, len = newArray.length; i < len; i++) {
  let d2 = newArray[i][1]["limit"].split('/');
 var RealDate = new Date(d2[2],parseInt(d2[1]) - 1,d2[0]);
 if (RealDate > today){
   myArray.push(newArray[i][1]["text"]);
 }
}

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




let menuBtn = $("#menuBar");

menuBtn.click(function(){

  $('.hamburger-menu').toggleClass('animate');

  if($(".secondaryMenu").hasClass("active")){

    $(".secondaryMenu").removeClass("active");
    setTimeout(function(){
      $(".primaryMenu").addClass("active");
    },400);


  } else {
    $(".primaryMenu").removeClass("active");

    setTimeout(function(){
      $(".secondaryMenu").addClass("active");
    },350);
  }
});

$(document).ready(function(){
  var elements = $(".sidebar > .main-info *");

  console.log(elements);

  for(let i = 0; i < elements.length; i++){
    setTimeout(function(){
      $(elements[i].tagName).addClass("bs");
    }, (400 * i) - 90 * i );
  }

  setTimeout(function(){
    $(".main-content").addClass("active");
  }, 1900);

});
