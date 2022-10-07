// -- BASIC FUNCTION CALL
var page = {
	init: function(){
	},
	displayChanged: function(visibility){
		if (visibility){
			
			
/*  ---- BASIC JS  CLICK/TAP FUNTION
$("#id").click(function() {
	
// --- add, remove, toggle
// --- class, attr
//	$("#id").removeClass("open");	
//	$("#id").children().removeClass("open");\v
//	$(this).addClass("open");
//	$(this).hide();
//	$(this).show();



// Required as last line if amchors are used
return false;

});

*/

/*  ---- Function when page loads

$(function() {
	$(document).ready(function(){
	  $( "#id" ).hide();
	  
	// Required as last line if amchors are used 
      return false;
	  });  
	  
*/
	
 $(function() {
	$(document).ready(function(){
	  $( "#reset" ).hide();
	 
      return false;
	  });   	
	
	  
    $( "#review1" ).click(function() {
$( "#container" ).children().removeClass("review_on  review1_off side1 side2 side3 side4 textIn");

	  $( "#container" ).children().children().children().removeClass("textIn");
	  $( "#product_body_1" ).addClass("textIn"); 
	  $( "#review1" ).addClass("textIn");
	  $( "#review1" ).addClass("review_on");
	  $( "#review2" ).addClass("side1");
	  $( "#review3" ).addClass("side2");
	  $( "#review4" ).addClass("side3");
	  $( "#review5" ).addClass("side4");
	  $( "#infobox1" ).addClass("infobox_in");
	  $( "#reset" ).show();
	  $( "#header1" ).addClass("header_out");
	  
	  $( "#infobox2" ).removeClass("infobox_in");
	  $( "#infobox2" ).addClass("infobox_start_shorter2");
	  $( "#infobox3" ).removeClass("infobox_in");
	  $( "#infobox3" ).addClass("infobox_start_shorter");
	  $( "#infobox4" ).removeClass("infobox_in");
	  $( "#infobox4" ).addClass("infobox_start_shorter");
	  $( "#infobox5" ).removeClass("infobox_in");
	  $( "#infobox5" ).addClass("infobox_start_shorter");
    });
	
	$( "#review2" ).click(function() {
	  $( "#container" ).children().removeClass("review_on review2_off side1 side2 side3 side4");
	  $( "#container" ).children().children().children().removeClass("textIn");
			$( "#product_body_2" ).addClass("textIn"); 
     $( "#review1" ).addClass("side1");
	  $( "#review2" ).addClass("review_on");
	  $( "#review3" ).addClass("side2");
	  $( "#review4" ).addClass("side3");
	  $( "#review5" ).addClass("side4");
	  $( "#infobox2" ).addClass("infobox_in"); 
	  $( "#reset" ).show();
	  $( "#header1" ).addClass("header_out");
	  
	  $( "#infobox1" ).removeClass("infobox_in");
	  $( "#infobox1" ).addClass("infobox_start");
	  $( "#infobox3" ).removeClass("infobox_in");
	  $( "#infobox3" ).addClass("infobox_start_shorter");
	  $( "#infobox4" ).removeClass("infobox_in");
	  $( "#infobox4" ).addClass("infobox_start_shorter");
	  $( "#infobox5" ).removeClass("infobox_in");
	  $( "#infobox5" ).addClass("infobox_start_shorter");
    });
   
   $( "#review3" ).click(function() {
	  $( "#container" ).children().removeClass("review_on  review3_off side1 side2 side3 side4");
	  $( "#container" ).children().children().children().removeClass("textIn");
			$( "#product_body_3" ).addClass("textIn"); 
    $( "#review1" ).addClass("side1");
	  $( "#review2" ).addClass("side2");
	  $( "#review3" ).addClass("review_on");
	  $( "#review4" ).addClass("side3");
	  $( "#review5" ).addClass("side4");
	  $( "#infobox3" ).addClass("infobox_in");
	  $( "#reset" ).show(); 
	  $( "#header1" ).addClass("header_out");
	  
	  $( "#infobox1" ).removeClass("infobox_in");
	  $( "#infobox1" ).addClass("infobox_start");
	  $( "#infobox2" ).removeClass("infobox_in");
	  $( "#infobox2" ).addClass("infobox_start_shorter2");
	  $( "#infobox4" ).removeClass("infobox_in");
	  $( "#infobox4" ).addClass("infobox_start_shorter");
	  $( "#infobox5" ).removeClass("infobox_in");
	  $( "#infobox5" ).addClass("infobox_start_shorter");
    });
	
	$( "#review4" ).click(function() {
$( "#container" ).children().removeClass("review_on  review4_off side1 side2 side3 side4");
$( "#container" ).children().children().children().removeClass("textIn");
	  $( "#product_body_4" ).addClass("textIn"); 

	  $( "#review1" ).addClass("side1");
	  $( "#review2" ).addClass("side2");
	  $( "#review3" ).addClass("side3");
	  $( "#review4" ).addClass("review_on");
	  $( "#review5" ).addClass("side4");
	  $( "#infobox4" ).addClass("infobox_in"); 
	  $( "#reset" ).show();
	  $( "#header1" ).addClass("header_out");

	  
	  $( "#infobox1" ).removeClass("infobox_in");
	  $( "#infobox1" ).addClass("infobox_start");
	  $( "#infobox2" ).removeClass("infobox_in");
	  $( "#infobox2" ).addClass("infobox_start_shorter2");
	  $( "#infobox3" ).removeClass("infobox_in");
	  $( "#infobox3" ).addClass("infobox_start_shorter");
	  $( "#infobox5" ).removeClass("infobox_in");
	  $( "#infobox5" ).addClass("infobox_start_shorter");
    });
	
	$( "#review5" ).click(function() {
$( "#container" ).children().removeClass("review_on  review5_off side1 side2 side3 side4");
		$( "#container" ).children().children().children().removeClass("textIn");
	  $( "#product_body_5" ).addClass("textIn"); 
	  $( "#review1" ).addClass("side1");
	  $( "#review2" ).addClass("side2");
	  $( "#review3" ).addClass("side3");
	  $( "#review4" ).addClass("side4");
	  $( "#review5" ).addClass("review_on");
	  $( "#infobox5" ).addClass("infobox_in");
	  $( "#reset" ).show(); 
	  $( "#header1" ).addClass("header_out");

	  
	  $( "#infobox1" ).removeClass("infobox_in");
	  $( "#infobox1" ).addClass("infobox_start");
	  $( "#infobox2" ).removeClass("infobox_in");
	  $( "#infobox2" ).addClass("infobox_start_shorter2");
	  $( "#infobox3" ).removeClass("infobox_in");
	  $( "#infobox3" ).addClass("infobox_start_shorter");
	  $( "#infobox4" ).removeClass("infobox_in");
	  $( "#infobox4" ).addClass("infobox_start_shorter");
    });
	
	$( "#reset" ).click(function() {
		$( "#container" ).children().removeClass("review_on side1 side2 side3 side4 header_out");
		$( "#container" ).children().children().children().removeClass("textIn");

	  	$( "#review1" ).addClass("review_box review1_off");
		$( "#review2" ).addClass("review_box review2_off");
		$( "#review3" ).addClass("review_box review3_off");
		$( "#review4" ).addClass("review_box review4_off");
		$( "#review5" ).addClass("review_box review5_off");
		$( "#header1" ).addClass("header_in");
		
		  
		$( "#infobox1" ).removeClass("infobox_in");
		$( "#infobox1" ).addClass("infobox_start");
		$( "#infobox2" ).removeClass("infobox_in");
		$( "#infobox2" ).addClass("infobox_start_shorter2");
		$( "#infobox3" ).removeClass("infobox_in");
		$( "#infobox3" ).addClass("infobox_start_shorter");
		$( "#infobox4" ).removeClass("infobox_in");
		$( "#infobox4" ).addClass("infobox_start_shorter");
		$( "#infobox5" ).removeClass("infobox_in");
		$( "#infobox5" ).addClass("infobox_start_shorter");
		  
		$( "#reset" ).hide();
    });
	
 $( "#image1_mobile" ).click(function() {
		$( "#container" ).children().removeClass("image_hidden image_mobile_enlarge");
        
		$( "#image1_mobile_hidden" ).addClass("image_mobile_enlarge");
		$( "#image2_mobile_hidden" ).addClass("image_hidden");
		$( "#image3_mobile_hidden" ).addClass("image_hidden");
		$( "#image4_mobile_hidden" ).addClass("image_hidden");
		$( "#image5_mobile_hidden" ).addClass("image_hidden");
		
		  
 }); 
  
$( "#image1_mobile_hidden" ).click(function() {
		$( "#container" ).children().removeClass("image_hidden image_mobile_enlarge");
        
		$( "#image1_mobile_hidden" ).addClass("image_hidden");
		$( "#image2_mobile_hidden" ).addClass("image_hidden");
		$( "#image3_mobile_hidden" ).addClass("image_hidden");
		$( "#image4_mobile_hidden" ).addClass("image_hidden");
		$( "#image5_mobile_hidden" ).addClass("image_hidden");
		
		  
 }); 
  
$( "#image2_mobile" ).click(function() {
		$( "#container" ).children().removeClass("image_hidden image_mobile_enlarge");
        
		$( "#image1_mobile_hidden" ).addClass("image_hidden");
		$( "#image2_mobile_hidden" ).addClass("image_mobile_enlarge");
		$( "#image3_mobile_hidden" ).addClass("image_hidden");
		$( "#image4_mobile_hidden" ).addClass("image_hidden");
		$( "#image5_mobile_hidden" ).addClass("image_hidden");
		
		  
 }); 
  
$( "#image2_mobile_hidden" ).click(function() {
		$( "#container" ).children().removeClass("image_hidden image_mobile_enlarge");
        
		$( "#image1_mobile_hidden" ).addClass("image_hidden");
		$( "#image2_mobile_hidden" ).addClass("image_hidden");
		$( "#image3_mobile_hidden" ).addClass("image_hidden");
		$( "#image4_mobile_hidden" ).addClass("image_hidden");
		$( "#image5_mobile_hidden" ).addClass("image_hidden");
		
		  
 }); 
  
  $( "#image3_mobile" ).click(function() {
		$( "#container" ).children().removeClass("image_hidden image_mobile_enlarge");
        
		$( "#image1_mobile_hidden" ).addClass("image_hidden");
		$( "#image2_mobile_hidden" ).addClass("image_hidden");
		$( "#image3_mobile_hidden" ).addClass("image_mobile_enlarge");
		$( "#image4_mobile_hidden" ).addClass("image_hidden");
		$( "#image5_mobile_hidden" ).addClass("image_hidden");
		
		  
 }); 
  
$( "#image3_mobile_hidden" ).click(function() {
		$( "#container" ).children().removeClass("image_hidden image_mobile_enlarge");
        
		$( "#image1_mobile_hidden" ).addClass("image_hidden");
		$( "#image2_mobile_hidden" ).addClass("image_hidden");
		$( "#image3_mobile_hidden" ).addClass("image_hidden");
		$( "#image4_mobile_hidden" ).addClass("image_hidden");
		$( "#image5_mobile_hidden" ).addClass("image_hidden");
		
		  
 });
  
 $( "#image4_mobile" ).click(function() {
		$( "#container" ).children().removeClass("image_hidden image_mobile_enlarge");
        
		$( "#image1_mobile_hidden" ).addClass("image_hidden");
		$( "#image2_mobile_hidden" ).addClass("image_hidden");
		$( "#image3_mobile_hidden" ).addClass("image_hidden");
		$( "#image4_mobile_hidden" ).addClass("image_mobile_enlarge");
		$( "#image5_mobile_hidden" ).addClass("image_hidden");
		
		  
 }); 
  
$( "#image4_mobile_hidden" ).click(function() {
		$( "#container" ).children().removeClass("image_hidden image_mobile_enlarge");
        
		$( "#image1_mobile_hidden" ).addClass("image_hidden");
		$( "#image2_mobile_hidden" ).addClass("image_hidden");
		$( "#image3_mobile_hidden" ).addClass("image_hidden");
		$( "#image4_mobile_hidden" ).addClass("image_hidden");
		$( "#image5_mobile_hidden" ).addClass("image_hidden");
		
		  
 }); 
  
 $( "#image5_mobile" ).click(function() {
		$( "#container" ).children().removeClass("image_hidden image_mobile_enlarge");
        
		$( "#image1_mobile_hidden" ).addClass("image_hidden");
		$( "#image2_mobile_hidden" ).addClass("image_hidden");
		$( "#image3_mobile_hidden" ).addClass("image_hidden");
		$( "#image4_mobile_hidden" ).addClass("image_hidden");
		$( "#image5_mobile_hidden" ).addClass("image_mobile_enlarge");
		
		  
 }); 
  
$( "#image5_mobile_hidden" ).click(function() {
		$( "#container" ).children().removeClass("image_hidden image_mobile_enlarge");
        
		$( "#image1_mobile_hidden" ).addClass("image_hidden");
		$( "#image2_mobile_hidden" ).addClass("image_hidden");
		$( "#image3_mobile_hidden" ).addClass("image_hidden");
		$( "#image4_mobile_hidden" ).addClass("image_hidden");
		$( "#image5_mobile_hidden" ).addClass("image_hidden");
		
		  
 }); 
  
  
  
  
  
  });
	
	
	
		}
	},
	deinit: function(){}
};






