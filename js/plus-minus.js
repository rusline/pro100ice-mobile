function checkit(nameForm) {

	var rest = 0;
	formName = document.forms[nameForm];
	count = formName.elements['count'];
	itemID = formName.elements['itemID'];
	typeID = formName.elements['typeID'];
	catID = formName.elements['parentID'];

  if (count.value > 0) {
     rest = 1;
  }
  else {
    alert(lang[10]);
  }
  if (rest == 1) {

    var params = "count=" + count.value + "&itemID=" + itemID.value + "&catID=" + catID.value + "&typeID=" + typeID.value;
  }
  return false;
}

/////////////////////////////////////////////////////////////////////////////
$(document).ready(function(){

	$("div.formItem .arrowUp")
	  .mouseup( function(){
	      plusStop(this);
          selectedSum (this);
          packPrice (this);
	    })
	  .mousedown(function(){

         elCount = $(this).parents("div.formItem").find(":text[@name^='count']");
         var count_val = elCount.attr("value");
         var countPack = $(this).parents("div.formItem").find("input.countPack").attr("value");
         if ( parseInt(countPack) > 1) { var countPackVal = parseInt(countPack); } else { var countPackVal = 1; }
         var count_val_plus = countPackVal + parseInt(count_val);
         repeatList = setTimeout('calculateList(1,  elCount)',222);
         if (count_val_plus>0) $(elCount).attr("value", count_val_plus); else  $(elCount).attr("value", countPackVal);

         return false;

	}).mouseout(function(){
		 plusStop(this);
		});

	$("div.formItem .arrowDown")
	  .mouseup( function(){
	           plusStop(this);
               selectedSum (this);
               packPrice (this);
	     })
	  .mousedown(function(){

         elCount = $(this).parents("div.formItem").find(":text[@name^='count']");
         var count_val = elCount.attr("value");
         var countPack = $(this).parents("div.formItem").find("input.countPack").attr("value");
         if (countPack > 1) { var countPackVal = parseInt(countPack); } else { var countPackVal = 1; }
         var count_val_min = parseInt(count_val) - countPackVal;
         repeatList = setTimeout('calculateList(2, elCount)',222);
         if (count_val_min>countPackVal - 1) $(elCount).attr("value", count_val_min); else  $(elCount).attr("value", countPackVal);


         return false;

	}).mouseout(function(){
		  plusStop(this);
		});
		
		$("div.formItem2 .arrowUp")
	  .mouseup( function(){
	      plusStop(this);
          selectedSum (this);
          packPrice (this);
	    })
	  .mousedown(function(){

         elCount = $(this).parents("div.formItem2").find(":text[@name^='count']");
         var count_val = elCount.attr("value");
         var countPack = $(this).parents("div.formItem2").find("input.countPack").attr("value");
         if ( parseInt(countPack) > 1) { var countPackVal = parseInt(countPack); } else { var countPackVal = 10; }
         var count_val_plus = countPackVal + parseInt(count_val);
         repeatList = setTimeout('calculateList(1,  elCount)',222);
         if (count_val_plus>0) $(elCount).attr("value", count_val_plus); else  $(elCount).attr("value", countPackVal);

         return false;

	}).mouseout(function(){
		 plusStop(this);
		});

	$("div.formItem2 .arrowDown")
	  .mouseup( function(){
	           plusStop(this);
               selectedSum (this);
               packPrice (this);
	     })
	  .mousedown(function(){

         elCount = $(this).parents("div.formItem2").find(":text[@name^='count']");
         var count_val = elCount.attr("value");
         var countPack = $(this).parents("div.formItem2").find("input.countPack").attr("value");
         if (countPack > 1) { var countPackVal = parseInt(countPack); } else { var countPackVal = 10; }
         var count_val_min = parseInt(count_val) - countPackVal;
         repeatList = setTimeout('calculateList(2, elCount)',222);
         if (count_val_min>countPackVal - 1) $(elCount).attr("value", count_val_min); else  $(elCount).attr("value", countPackVal);


         return false;

	}).mouseout(function(){
		  plusStop(this);
		});




});
