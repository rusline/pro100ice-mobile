$(document).ready(function(){

    $('input:text, input:password').each(function(){
        var txtval = $(this).val();
        $(this).focus(function(){
            if($(this).val() == txtval){
                $(this).val('')
            }
        });
        $(this).blur(function(){
            if($(this).val() == ""){
                $(this).val(txtval);
            }
        });
    });

	
		// Tabs
		$('ul.tabs').delegate('li:not(.current)', 'click', function() {
		$(this).addClass('current').siblings().removeClass('current')
			.parents('div.tab-box').find('div.tbox').hide().eq($(this).index()).fadeIn(150);
			return false;
		});
		
		$('table.tabs').delegate('td:not(.current)', 'click', function() {
		$(this).addClass('current').siblings().removeClass('current')
			.parents('div.goods-box').find('div.gbox').hide().eq($(this).index()).fadeIn(150);
			return false;
		});
		
		// Check
		$(".checkboxclass").click(function(){
        if($(this).is(":checked")){
            $(this).next("label").addClass("labelselected");
        }else{
            $(this).next("label").removeClass("labelselected");
        }
    });
		
		// Radio
		$(".radioclass").click(function(){
			 if($(this).is(":checked")){
            $(".radioselected:not(:checked)").removeClass("radioselected");
            $(this).next("label").addClass("radioselected");
			  }

    });
	
	//
	$(".title").click(function(){
		$(this).toggleClass("act").next("div").toggle();
  });
	
	
	// Slide
	var Page = (function() {
		var $navArrows = $( '#nav-arrows' ),
			$nav = $( '#nav-dots td' ),
			slitslider = $( '#slider' ).slitslider( {
				onBeforeChange : function( slide, pos ) {
					$nav.removeClass( 'nav-dot-current' );
					$nav.eq( pos ).addClass( 'nav-dot-current' );
				}
			}),
			init = function() {
				initEvents();
			},
			initEvents = function() {
				$navArrows.children( ':last' ).on( 'click', function() {
					slitslider.next();
					return false;
				});
				$navArrows.children( ':first' ).on( 'click', function() {
					slitslider.previous();
					return false;
				});
				$nav.each( function( i ) {
					$( this ).on( 'click', function( event ) {
						var $dot = $( this );
							if( !slitslider.isActive() ) {
								$nav.removeClass( 'nav-dot-current' );
								$dot.addClass( 'nav-dot-current' );
							}
							slitslider.jump( i + 1 );
							return false;
						});
					});
				};
				return { init : init };
			})();
			Page.init();
			
			
			jQuery.noConflict();	
				// trackbar
			$('.trackbar').trackbar();
			
			// rating
			$('.rating').rating({
				fx: 'half',
				image: 'images/stars.png'
			});
			(jQuery);
			

})			







