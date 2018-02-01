var Content = message;

///////////////////////////////////////////////////////////////////////
///////////  check if page has loaded and not empty function  ////////
//////////////////////////////////////////////////////////////////////
function CheckPage()
{
var people = document.querySelector('[data-vertical="PEOPLE"]');
if ( people && people.getAttribute('class')=='active' )
{


scroll();
}
else
alert("Go to people search");
}

///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
CheckPage();


///////////////////////////////////////////////////////////////////////
//////////////////  Scroll to reveal content  ////////////////////////
//////////////////////////////////////////////////////////////////////
function scroll()
{

  scrollTo(0,document.body.scrollHeight);
  setTimeout(function(){
      var containers = document.querySelectorAll('[class="search-result__actions--primary button-secondary-medium m5"');

    InviteAll(containers);},7000);

}
///////////////////////////////////////////////////////////////////////
///////////////////////// Send invites ///////////////////////////////
//////////////////////////////////////////////////////////////////////
function InviteAll(people)
{
scrollTo(0,document.body.scrollHeight);
for ( var i = 0 ; i < people.length;i++)
{


  

        Send(people[i],i);
 

}
setTimeout(function(){

   var Next= document.querySelector('.next');
   if ( Next)
   {
        Next.click();
        setTimeout(function(){CheckPage();},7000);


   }
    else
    {
        alert("Added all valiable!")
        return;
    }
},1700*(people.length))
}
///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function Send(people,i)
{


    setTimeout(function(){

setTimeout(function(){    people.click();  },300);

setTimeout(function(){   document.querySelector('[class="button-secondary-large mr1"]').click();  },600);

setTimeout(function(){   document.querySelector('.send-invite__custom-message').value=Content;  },900);
setTimeout(function(){  document.querySelector('.button-primary-large.ml1').click();   },1200);



    },i*1500);
}