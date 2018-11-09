/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * Rahul Shah
 * Handles all of the app stuff stated above
 * also handles some of the button interactions
 */
var expandFlag = 0; //card not expanded

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
    }
};

app.initialize();

//function to expand the extract card so user can read it
function changeCard(card){
  //if expanded,shrink, otherwise expand it
  if(expandFlag == 0){ //expand
    card.style.height = 'auto';
    expandFlag = 1;
    document.getElementById('expandButton').src = "img/shrink.png"; //change button
    //make only these first two buttons fixed
  }else{ //shrink
    card.style.height = '20vh';
    expandFlag = 0;
    document.getElementById('expandButton').src = "img/expand.png"; //change button
    //put buttons back
  }
  
}