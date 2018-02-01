

var Number=0;


Start();

function Start()
{
var PYMN =document.querySelector('[class="mn-pymk-list Elevation-2dp"]');
if ( PYMN)
		connect();
	else
	{
		turn;
	}



}
function connect()
{
    console.log(Number);
    var     All = jQuery('[class*="button-secondary-small"]');

    for ( var i = 1; i < All.length;i++ )
    {

jQuery(All[i]).trigger('click');


    }
   Number++;
   console.log(Number);
var PYMN =document.querySelector('[class="mn-pymk-list Elevation-2dp"]');
if (PYMN)
    Scroll();



else
	return;
}



function Scroll()
{

if ( Number>8)
{
	window.location.reload();
	Number=0;

}

else
{
 scrollTo(0,document.body.scrollHeight);
      
 setTimeout(function(){connect()},15000);

}
}