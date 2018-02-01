
var Content = message;
me();

var Counter=0;
var length;
///////////////////////////////////////////////////////////////////////
//////////////////// scorll and reveal content ///////////////////////
//////////////////////////////////////////////////////////////////////
function me()
{

  scrollTo(0,document.body.scrollHeight);
  document.querySelector('body').click();
var Buttons = document.querySelectorAll('[class*="message-anywhere-button"]');
length = Buttons.length;

for ( var i = 0 ;  i < Buttons.length  ; i++){
   Do(Buttons[i],i);


}

}
///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////
/////////////////////////Practically sends the message////////////////
//////////////////////////////////////////////////////////////////////
function Do(div,i)
{

      setTimeout(function(){
setTimeout(function(){

 div.click();



},300);

setTimeout(function(){
      document.querySelector('[class="ember-text-area msg-messaging-form__message Sans-15px-black-85% ember-view"]').click();
},700);
setTimeout(function(){

document.querySelector('[class="msg-messaging-form__send-button button-tertiary-small"]').removeAttribute('disabled');
     document.querySelector('textarea[class="ember-text-area msg-messaging-form__message Sans-15px-black-85% ember-view"]').value = Content;
         document.querySelector('textarea[class="ember-text-area msg-messaging-form__message Sans-15px-black-85% ember-view"]').value+='\r';
               jQuery('textarea').keydown();



},900);

setTimeout(function(){


 jQuery('textarea').keyup();




},1300);

setTimeout(function(){
jQuery('[class="msg-messaging-form__send-button button-tertiary-small"]').click();     

      if ( Counter==length)
setTimeout(function(){Pages();},7000);  
},3000);
Counter++;
    },3500*i);
}
///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////
////////////////////////////next page...//////////////////////////////
//////////////////////////////////////////////////////////////////////
function Pages()
{
      Counter=0;
    document.querySelector('.next-text').click();
    setTimeout(function(){me();},8000);

}

///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////