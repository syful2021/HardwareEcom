
function additionalCarousel(sliderId){
	 /*======  curosol For Additional ==== */
	 var czadditional = $(sliderId);
      czadditional.owlCarousel({
     	 items : 4, //10 items above 1000px browser width
     	 itemsDesktop : [1259,4], 
     	 itemsDesktopSmall : [1199,3], 
     	 itemsTablet: [991,2], 
     	 itemsMobile : [320,1] 
      });
      // Custom Navigation Events
      $(".additional_next").click(function(){
        czadditional.trigger('owl.next');
      })
      $(".additional_prev").click(function(){
        czadditional.trigger('owl.prev');
      });
}

function hoverimagedir(){
	$('.image').each(function(){  						   
		$(this).hoverdir();   
	});
}

$(document).ready(function(){
	
	bindGrid();
	additionalCarousel('#main .additional-carousel');

	hoverimagedir();

	prestashop.on('updateProductList', function() {
		hoverimagedir();
	});

	$('.products-section-title').wrapInner('<span></span>');
	
	$('.cart_block.dropdown-menu').on('click',function (e) {
		e.stopPropagation();
	});
	
	$('#mainmenu-toggle').click(function(event){		
		event.stopPropagation();		
		$('.mobile_main_menu').toggle();	
	});
	
	// Add/Remove acttive class on menu active in responsive  
	$('#menu-icon').on('click', function() {
		$(this).toggleClass('active');
	});
	
	$('input[name="email"], #search_widget input[type="text"]').focus(function(){
		$(this).data('placeholder',$(this).attr('placeholder')).attr('placeholder','');
	}).blur(function(){
		$(this).attr('placeholder',$(this).data('placeholder'));
	});
	
	
	$('.search_button').click(function(event){			
		$(this).toggleClass('active');		
		event.stopPropagation();		
		$('.search_toggle').toggle();		
		$( ".search-widget form input[type=text]" ).focus();
	
	});
	
	$(".search_toggle").on("click", function (event) {
		event.stopPropagation();	
	});
	
	$('nav.breadcrumb').appendTo('#content-wrapper .breadcrumb');
	
	/* ---------------- start horizontal more menu setting ---------------------- */

		var max_elem = 5;	
		var items = $('.horizontal-menu ul#top-menu > li');	
		var surplus = items.slice(max_elem, items.length);
		
		surplus.wrapAll('<li class="category more_menu" id="more_menu"><div id="top_moremenu" class="popover sub-menu js-sub-menu collapse"><ul class="top-menu more_sub_menu">');

		$('.horizontal-menu ul#top-menu .more_menu').prepend('<a href="#" class="dropdown-item" data-depth="0"><span class="pull-xs-right hidden-md-up"><span data-target="#top_moremenu" data-toggle="collapse" class="navbar-toggler collapse-icons"><i class="material-icons add">&#xE313;</i><i class="material-icons remove">&#xE316;</i></span></span></span>More</a>');

		$('.horizontal-menu ul#top-menu .more_menu').mouseover(function(){
			$(this).children('div').css('display', 'block');
		})
		.mouseout(function(){
			$(this).children('div').css('display', 'none');
		});	

	 /* ---------------- end more menu setting ----------------------	*/
	
	
	
	 /* ---------------- start Vertical menu setting ---------------------- */
		var vmax_elem = 12;	
		var vmenu_items = $('#czverticalmenublock ul#top-menu > li');	
		
		if (vmenu_items.length > vmax_elem) {
			$('#czverticalmenublock ul#top-menu').append('<li class="more_menu"><a href="#" class="vertical-menu-item" data-depth="0">More Categories<span class="more_category"><i class="fa-icon add"></i></span></a></li>')
		}
		$('#czverticalmenublock ul#top-menu .more_menu').click(function(event) {
			event.preventDefault();	
			if ($(this).hasClass('active')) {
				vmenu_items.each(function(j) {
					if (j >= vmax_elem) {
						$(this).slideUp(200)
					}
				});
				$(this).removeClass('active');
				$('#czverticalmenublock ul#top-menu .more_menu').html('<a href="#" class="vertical-menu-item" data-depth="0">More Categories<span class="more_category"><i class="fa-icon add"></i></span></a>')
			} else {
				vmenu_items.each(function(j) {
					if (j >= vmax_elem) {
						$(this).slideDown(200)
					}
				});
				$(this).addClass('active');
				$('#czverticalmenublock ul#top-menu .more_menu').html('<a href="#" class="vertical-menu-item" data-depth="0">Less Categories<span class="more_category"><i class="fa-icon remove">&nbsp;</i></span></a>')
			}
		});
		vmenu_items.each(function(j) {
			if (j >= vmax_elem) {
				$(this).css('display', 'none')
			}
		});
	/* ---------------- end Vertical menu setting ----------------------	*/
	
});




// Loading image before flex slider load
	$(window).load(function() { 
		$(".loadingdiv").removeClass("spinner"); 
	});

// Flex slider load
	$(window).load(function() {
		if($('.flexslider').length > 0){ 
			$('.flexslider').flexslider({		
				slideshowSpeed: $('.flexslider').data('interval'),
				pauseOnHover: $('.flexslider').data('pause'),
				animation: "Slide"
			});
		}
	});		

// Scroll page bottom to top
	$(window).scroll(function() {
		if ($(this).scrollTop() > 500) {
			$('.top_button').fadeIn(500);
		} else {
			$('.top_button').fadeOut(500);
		}
	});							
	$('.top_button').click(function(event) {
		event.preventDefault();		
		$('html, body').animate({scrollTop: 0}, 800);
	});


/*======  Carousel Slider For Feature Product ==== */
	
	var czblog = $("#blog-carousel");
	czblog.owlCarousel({
		items : 3, //10 items above 1000px browser width
		itemsDesktop : [1199,3], 
		itemsDesktopSmall : [991,2], 
		itemsTablet: [400,1],
		itemsMobile : [400,1] 
	});
	// Custom Navigation Events
	$(".blog_next").click(function(){
		czblog.trigger('owl.next');
	})
	$(".blog_prev").click(function(){
		czblog.trigger('owl.prev');
	});


/*======  Carousel Slider For Feature Product ==== */
	
	var czfeature = $("#feature-carousel");
	czfeature.owlCarousel({
		items : 5, //10 items above 1000px browser width
		itemsDesktop : [1199,4], 
		itemsDesktopSmall : [991,3],
		itemsTablet: [580,2], 
		itemsMobile : [350,1] 
	});
	// Custom Navigation Events
	$(".feature_next").click(function(){
		czfeature.trigger('owl.next');
	})
	$(".feature_prev").click(function(){
		czfeature.trigger('owl.prev');
	});



/*======  Carousel Slider For New Product ==== */
	
	var cznewproduct = $("#newproduct-carousel");
	cznewproduct.owlCarousel({
		items : 5, //10 items above 1000px browser width
		itemsDesktop : [1199,4], 
		itemsDesktopSmall : [991,3],
		itemsTablet: [580,2], 
		itemsMobile : [350,1] 
	});
	// Custom Navigation Events
	$(".newproduct_next").click(function(){
		cznewproduct.trigger('owl.next');
	})
	$(".newproduct_prev").click(function(){
		cznewproduct.trigger('owl.prev');
	});



/*======  Carousel Slider For Bestseller Product ==== */
	
	var czbestseller = $("#bestseller-carousel");
	czbestseller.owlCarousel({
		items : 5, //10 items above 1000px browser width
		itemsDesktop : [1199,4], 
		itemsDesktopSmall : [991,3],
		itemsTablet: [580,2], 
		itemsMobile : [350,1] 
	});
	// Custom Navigation Events
	$(".bestseller_next").click(function(){
		czbestseller.trigger('owl.next');
	})
	$(".bestseller_prev").click(function(){
		czbestseller.trigger('owl.prev');
	});



/*======  Carousel Slider For Special Product ==== */
	var czspecial = $("#special-carousel");
	czspecial.owlCarousel({
		items : 5, //10 items above 1000px browser width
		itemsDesktop : [1199,4], 
		itemsDesktopSmall : [991,3],
		itemsTablet: [580,2], 
		itemsMobile : [350,1] 
	});
	// Custom Navigation Events
	$(".special_next").click(function(){
		czspecial.trigger('owl.next');
	})
	$(".special_prev").click(function(){
		czspecial.trigger('owl.prev');
	});


/*======  Carousel Slider For Accessories Product ==== */

	var czaccessories = $("#accessories-carousel");
	czaccessories.owlCarousel({
		items : 5, //10 items above 1000px browser width
		itemsDesktop : [1199,4], 
		itemsDesktopSmall : [991,3],
		itemsTablet: [580,2], 
		itemsMobile : [350,1] 
	});
	// Custom Navigation Events
	$(".accessories_next").click(function(){
		czaccessories.trigger('owl.next');
	})
	$(".accessories_prev").click(function(){
		czaccessories.trigger('owl.prev');
	});


/*======  Carousel Slider For Category Product ==== */

	var czproductscategory = $("#productscategory-carousel");
	czproductscategory.owlCarousel({
		items : 5, //10 items above 1000px browser width
		itemsDesktop : [1199,4], 
		itemsDesktopSmall : [991,3],
		itemsTablet: [580,2], 
		itemsMobile : [350,1] 
	});
	// Custom Navigation Events
	$(".productscategory_next").click(function(){
		czproductscategory.trigger('owl.next');
	})
	$(".productscategory_prev").click(function(){
		czproductscategory.trigger('owl.prev');
	});


/*======  Carousel Slider For Viewed Product ==== */

	var czviewed = $("#viewed-carousel");
	czviewed.owlCarousel({
		items : 5, //10 items above 1000px browser width
		itemsDesktop : [1199,4], 
		itemsDesktopSmall : [991,3],
		itemsTablet: [580,2], 
		itemsMobile : [350,1] 
	});
	// Custom Navigation Events
	$(".viewed_next").click(function(){
		czviewed.trigger('owl.next');
	})
	$(".viewed_prev").click(function(){
		czviewed.trigger('owl.prev');
	});

/*======  Carousel Slider For Crosssell Product ==== */

	var czcrosssell = $("#crosssell-carousel");
	czcrosssell.owlCarousel({
		items : 5, //10 items above 1000px browser width
		itemsDesktop : [1199,4], 
		itemsDesktopSmall : [991,3], 
		itemsTablet: [580,2], 
		itemsMobile : [350,1] 
	});
	// Custom Navigation Events
	$(".crosssell_next").click(function(){
		czcrosssell.trigger('owl.next');
	})
	$(".crosssell_prev").click(function(){
		czcrosssell.trigger('owl.prev');
	});

/*======  curosol For Manufacture ==== */
	 var czbrand = $("#brand-carousel");
      czbrand.owlCarousel({
     	 items : 7, //10 items above 1000px browser width
     	 itemsDesktop : [1199,5], 
     	 itemsDesktopSmall : [767,4],
     	 itemsTablet: [650,3],
		 itemsTabletSmall: [480,2],
     	 itemsMobile : [320,1]
      });
      // Custom Navigation Events
      $(".brand_next").click(function(){
        czbrand.trigger('owl.next');
      })
      $(".brand_prev").click(function(){
        czbrand.trigger('owl.prev');
      });
	  

/*======  Carousel Slider For For Tesimonial ==== */

	  var cztestimonial = $("#testimonial-carousel");
     	 cztestimonial.owlCarousel({
			 autoPlay: false,
			 singleItem:true
      });

		/* Custom Navigation Events*/
      $(".cztestimonial_next").click(function(){
        cztestimonial.trigger('owl.next');
      });

      $(".cztestimonial_prev").click(function(){
        cztestimonial.trigger('owl.prev');
	  });
	  
/*======  curosol For Our Category Image list product Slider  ==== */

var czcategoryimagelist = $("#czcategoryimagelist-carousel");
czcategoryimagelist.owlCarousel({
	items : 6, //10 items above 1000px browser width
	itemsDesktop : [1199,5], 
	itemsDesktopSmall : [991,4],
	itemsTablet: [650,3],
	itemsTabletSmall: [480,2],
	itemsMobile : [320,1],
	autoPlay: false
});

	/* Custom Navigation Events*/
$(".cat_next").click(function(){
czcategoryimagelist.trigger('owl.next');
});

$(".cat_prev").click(function(){
czcategoryimagelist.trigger('owl.prev');
});


function bindGrid()
{
	var view = $.totalStorage("display");

	if (view && view != 'grid')
		display(view);
	else
		$('.display').find('li#grid').addClass('selected');

	$(document).on('click', '#grid', function(e){
		e.preventDefault();
		display('grid');
	});

	$(document).on('click', '#list', function(e){
		e.preventDefault();
		display('list');		
	});	
}

function display(view)
{
	if (view == 'list')
	{
		$('#products ul.product_list').removeClass('grid').addClass('list row');
		$('#products .product_list > li').removeClass('col-xs-12 col-sm-6 col-md-6 col-lg-4').addClass('col-xs-12');
				
		$('#products .product_list > li').each(function(index, element) {
			var html = '';
			html = '<div class="product-miniature js-product-miniature" data-id-product="'+ $(element).find('.product-miniature').data('id-product') +'" data-id-product-attribute="'+ $(element).find('.product-miniature').data('id-product-attribute') +'" itemscope itemtype="http://schema.org/Product">';
				html += '<div class="thumbnail-container col-xs-4 col-xs-5 col-md-3">' + $(element).find('.thumbnail-container').html() + '</div>';
				
				html += '<div class="product-description center-block col-xs-4 col-xs-7 col-md-9">';

					html += '<div class="brand-title" itemprop="name">'+ $(element).find('.brand-title').html() +'</div>';

					html += '<h3 class="h3 product-title" itemprop="name">'+ $(element).find('h3').html() + '</h3>';

					var comment = $(element).find('.comments_note').html();       // check : Comment module is enabled
					if (comment != null) {
						html += '<div class="comments_note">'+ $(element).find('.comments_note').html() + '</div>';
					}
					
					var price = $(element).find('.product-price-and-shipping').html();       // check : catalog mode is enabled
					if (price != null) {
						html += '<div class="product-price-and-shipping">'+ price + '</div>';
					}
					
					html += '<div class="product-detail">'+ $(element).find('.product-detail').html() + '</div>';
					
					var colorList = $(element).find('.highlighted-informations').html();
					if (colorList != null) {
						html += '<div class="highlighted-informations">'+ colorList +'</div>';
					}
					
					html += '<div class="product-actions">'+ $(element).find('.product-actions').html() +'</div>';
					
				html += '</div>';
			html += '</div>';
		$(element).html(html);
		});
		$('.display').find('li#list').addClass('selected');
		$('.display').find('li#grid').removeAttr('class');
		$.totalStorage('display', 'list');

		if (typeof(StWishlistButtonAction) != 'undefined') {
			StWishlistButtonAction()
		}
		if (typeof(StCompareButtonAction) != 'undefined') {
			StCompareButtonAction()
		}

		hoverimagedir();
	}
	else
	{
		$('#products ul.product_list').removeClass('list').addClass('grid row');
		$('#products .product_list > li').removeClass('col-xs-12').addClass('col-xs-12 col-sm-6 col-md-6 col-lg-4');
		$('#products .product_list > li').each(function(index, element) {
		var html = '';
		html += '<div class="product-miniature js-product-miniature" data-id-product="'+ $(element).find('.product-miniature').data('id-product') +'" data-id-product-attribute="'+ $(element).find('.product-miniature').data('id-product-attribute') +'" itemscope itemtype="http://schema.org/Product">';
			html += '<div class="thumbnail-container">' + $(element).find('.thumbnail-container').html() +'</div>';
			
			html += '<div class="product-description">';

				html += '<div class="brand-title" itemprop="name">'+ $(element).find('.brand-title').html() +'</div>';

				html += '<h3 class="h3 product-title" itemprop="name">'+ $(element).find('h3').html() +'</h3>';
				
				var price = $(element).find('.product-price-and-shipping').html();       // check : catalog mode is enabled
				if (price != null) {
					html += '<div class="product-price-and-shipping">'+ price + '</div>';
				}	
				
				var comment = $(element).find('.comments_note').html();       // check : Comment module is enabled
				if (comment != null) {
					html += '<div class="comments_note">'+ $(element).find('.comments_note').html() + '</div>';
				}
				
				html += '<div class="product-detail">'+ $(element).find('.product-detail').html() + '</div>';

				html += '<div class="product-actions">'+ $(element).find('.product-actions').html() +'</div>';
								
				var colorList = $(element).find('.highlighted-informations').html();
				if (colorList != null) {
					html += '<div class="highlighted-informations">'+ colorList +'</div>';
				}
				
			html += '</div>';
		html += '</div>';
		$(element).html(html);
		});
		$('.display').find('li#grid').addClass('selected');
		$('.display').find('li#list').removeAttr('class');
		$.totalStorage('display', 'grid');

		if (typeof(StWishlistButtonAction) != 'undefined') {
			StWishlistButtonAction()
		}
		if (typeof(StCompareButtonAction) != 'undefined') {
			StCompareButtonAction()
		}

		hoverimagedir();
	}
}


function responsivecolumn(){
	
	if ($(document).width() <= 991)
	{
		$('.container #columns_inner #left-column').appendTo('.container #columns_inner');
		$(window).bind('scroll', function () {
			if ($(window).scrollTop() > 200) {
				$('.header-top').addClass('fixed');
			} else {
				$('.header-top').removeClass('fixed');
			}
		});
	}
	else if($(document).width() >= 992)
	{
		$('.container #columns_inner #left-column').prependTo('.container #columns_inner');
		$(window).bind('scroll', function () {
			if ($(window).scrollTop() > 215) {
				$('.header-top').addClass('fixed');
			} else {
				$('.header-top').removeClass('fixed');
			}
		});
		
	}
	$('#language-selector').appendTo('.user-info > ul.dropdown-menu');
	$('#currency-selector').appendTo('.user-info > ul.dropdown-menu');	
}

$(document).ready(function(){responsivecolumn();});
$(window).resize(function(){responsivecolumn();});