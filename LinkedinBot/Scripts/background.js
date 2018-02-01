
///////////////////////////////////////////////////////////////////////
//////////////  popup text area for messages content  ////////////////
//////////////////////////////////////////////////////////////////////

function hello(num) {

var list = document.getElementById("ul"); 
if ( list.children.length  ==10)
{
    var hr = document.createElement('hr');
    hr.setAttribute('id','NewHr');

var input = document.createElement('textarea');
input.setAttribute("type", "text");
input.setAttribute("id", "NewInput");
input.setAttribute('placeholder','Type youre message here');
input.setAttribute('style','height:250px;margin-top:-45px;width:230px;');

var send = document.createElement('div');
send.innerHTML="Submit";

send.setAttribute('id','Submit');
send.setAttribute('style','text-align:center;font-weight: bold;');
var link = document.createElement('a');
link.setAttribute('id','Submited');
send.appendChild(link);


var newItem = document.createElement("LI");  
newItem.setAttribute('id','NewLi');   




var a =4,b=5,c=6,d=7,e=8;
if ( num==2)
  a=9,b=10,c=11,d=12,e=13;
list.insertBefore(newItem, list.childNodes[a]);
list.insertBefore(input,list.childNodes[b]);
list.insertBefore(send,list.childNodes[c]);

list.insertBefore(link,list.childNodes[d]);
list.insertBefore(hr,list.childNodes[e]);

if (num==2)
{

document.getElementById('Submit').addEventListener('click',Submit2);
}
else
document.getElementById('Submit').addEventListener('click',Submit);




}
else

{

   var child3 = document.getElementById("NewHr");
   var child4 = document.getElementById("Submit");

   var parent = document.getElementById("ul");
var child = document.getElementById("NewLi");
var child2 = document.getElementById('NewInput');
parent.removeChild(child);
parent.removeChild(child2);
parent.removeChild(child3);
parent.removeChild(child4);

window.location.href="Main.html";



}
}
///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////
//////////////  Message content to people by filter  /////////////////
//////////////////////////////////////////////////////////////////////
function Submit()
{

    var text = document.getElementById('NewInput').value.replace(/\n/, '\\n');

document.getElementById('NewInput').value='Wait a sec....';

setTimeout(function(){run();},5000);

function run()
{

   chrome.tabs.executeScript({
    file: 'Scripts/jquery-2.1.4.js'
  }); 
   

   chrome.tabs.executeScript({
    file: 'Scripts/script.js'
  });
  



        chrome.tabs.executeScript({
        code: 'var message = \'' + text + '\';'
        });
    
     chrome.tabs.executeScript({
            file: 'Scripts/do.js'
            
        });
    window.close();
  }


}
///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////
/////  Submit invitation content to  new connections by category  ////
//////////////////////////////////////////////////////////////////////
function Submit2()
{
  
        var text = document.getElementById('NewInput').value.replace(/\n/, '\\n');
document.getElementById('NewInput').value='Wait a sec....';
setTimeout(function(){run();},5000);
function run()
{
 

      chrome.tabs.executeScript({
        code: 'var message = \'' + text + '\';'

  }); 
  chrome.tabs.executeScript({
    file: 'Scripts/InviteAll.js'
  }); 
       window.close();
}

    
}
///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
//////////////////  Event Listeners for popup  //////////////////////
//////////////////////////////////////////////////////////////////////


//---------------///////////////////////----------------//
//check if page is new page -if it does set values to false
//---------------///////////////////////----------------//

      chrome.tabs.getSelected(null, function(tab) {
      
if ( tab.url.toLowerCase().indexOf('https://www.linkedin.com/')<0)
{

chrome.storage.local.set({'Iflag':'false'}, function (result) {});
chrome.storage.local.set({'Mflag':'false'}, function (result) {});

}
      });

//---------------///////////////////////----------------//
//---------------///////////////////////----------------//




document.addEventListener('DOMContentLoaded', function () {

//---------------///////////////////////----------------//
//                  Messages click Event                //
//---------------///////////////////////----------------//
document.getElementById('Messages').addEventListener('click',function(){ 


//Set  invites option flag to false
chrome.storage.local.set({'Iflag':'false'}, function (result) {});

//Check messages flag
chrome.storage.local.get('Mflag', function (result) {});



/////////////////////////////
//Update page url if needed , else if already clicked before ->>Perform desired actions...
////////////////////////////
chrome.storage.local.get('Mflag', function (result) {



if  ( result.Mflag == 'false' || result.Mflag===undefined)
{
  chrome.storage.local.set({'Mflag':'true'}, function (result) {});
  chrome.tabs.update({url: "https://www.linkedin.com/search/results/people/?facetNetwork=%5B%22F%22%5D&origin=MEMBER_PROFILE_CANNED_SEARCH"});
  window.location.href="Main.html";

}
else if  (result.Mflag == 'true')
{

  hello(1);
  chrome.storage.local.set({'Mflag':'false'}, function (result) {});
  chrome.storage.clear();

}
});

       
      });


//---------------///////////////////////----------------//
//---------------///////////////////////----------------//





//---------------///////////////////////----------------//
//                Connections by category..
//---------------///////////////////////----------------//
 document.getElementById('ConnectionsByCategory').addEventListener('click',function(){





//Set  invites option flag to false
  chrome.storage.local.set({'Mflag':'false'}, function (result) {});

//Check messages flag
  chrome.storage.local.get('Iflag', function (result) {});


/////////////////////////////
//Update page url if needed , else if already clicked before ->>Perform desired actions...
////////////////////////////
  chrome.storage.local.get('Iflag', function (result) {


if  ( result.Iflag == 'false' || result.Iflag===undefined)
{
                 chrome.storage.local.set({'Iflag':'true'}, function (result) {});
           chrome.tabs.update({url: "https://www.linkedin.com/search/results/people/?origin=DISCOVER_FROM_SEARCH_HOME"});
  window.location.href="Main.html";

}
else if  (result.Iflag == 'true')
{

  hello(2);
                   chrome.storage.local.set({'Iflag':'false'}, function (result) {});
  chrome.storage.clear();

}
});


 });

//---------------///////////////////////----------------//
//---------------///////////////////////----------------//




//---------------///////////////////////----------------//
//                  People you may know
//---------------///////////////////////----------------//
document.getElementById('PeopleYouMayKnow').addEventListener('click',function(){chrome.tabs.update({url: "https://www.linkedin.com/mynetwork/"});
PeopleYouMayKnow();});
//---------------///////////////////////----------------//
//---------------///////////////////////----------------//

});





///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////
////////  Add random people to your linkedin connections  ////////////
//////////////////////////////////////////////////////////////////////
function PeopleYouMayKnow()
{
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
    PeopleYouMayKnow();

  }
});

setTimeout(function(){run();},8000);
function run()
{
  chrome.tabs.executeScript({
    file: 'Scripts/jquery-2.1.4.js'
  }); 
 chrome.tabs.executeScript({
    file: 'Scripts/PeopleYouMayKnow.js'
  }); 


//window.close();
}
}
////////////////////////////////////////////////////////////////////
//////////////////////////--->The end<--////////////////////////////
////////////////////////////////////////////////////////////////////



