/**
 * Rahul Shah
 * Wikipedia.js
 * Pulls information from the Wikipedia API and updates the webpage using AJAX
 * Handles all of the fun javascript stuff involved in displaying the data
 */

//all of the variables update once updateWiki is called
var pageview = '';
var lastUpdated = '';
var extract = '';
var city;


//AJAX call to load JSON from Wikipedia API
//gets the introductory information, pageview, and time of last update
function updateWiki(c) {
  city = c;
  city = city.trim().replace(' ', '_');
  var url = "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=extracts%7Cpageviews%7Cinfo&titles=" + city +"&redirects=1&exintro=1&explaintext=1&pvipmetric=pageviews&pvipdays=1&inprop=";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     var response =  JSON.parse(this.responseText)['query']['pages']; //all the JSON for all of the pages, need ID
     var keys = Object.keys(response);
     
     //got key!
     //get extract
     var key = keys[0];
     //got page info!
     //get just the extract
     var page = response[key];
     extract = page['extract'];

     //update variables
     //the Wikipedia API is garbage so I have to do this every time, forgive me
     var date = Object.keys(page['pageviews']);
     pageview = page['pageviews'][date]; //page view of today

     lastUpdated = page['touched'];
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

//updates the section showing the extract/brief info section
function updateExtract(){
  document.getElementById("extract").innerHTML = extract;
}
//updates the section showing the page view for a specific city
function updateViews(){
  updateWiki(city); //call update
  document.getElementById('pageview').innerHTML = pageview;
}

//updates the date of the last revision
function updateDate(){
  updateWiki(city); //call update
  document.getElementById('touchedDate').innerHTML = lastUpdated;
}

