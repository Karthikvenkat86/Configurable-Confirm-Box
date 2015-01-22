//PLUGIN FOR THE NEW ALERT BOX
/******************************************************************************/

 (function($){  
	 $.fn.extend({   
			customAlert: function(options,callback,curObj) {
			
				var curEl = curObj;							
				var htmlStr = '<div id="amd_alertMsgDiv">'+
								'<div id="amd_confirmheader">Pramati Confirm Box</div>'+
								'<div id="amd_message">Do you want to continue?..</div>'+
								'<div id="amd_btncontainer" >'+
									'<input id="amd_ok" type="button" class="amd_submit" value="Ok" />'+
									'<input id="amd_cancel" type="button" class="amd_submit" value="Cancel" />'+
								'</div>'+
							  '</div>'+
							  '<div id="amd_overlay" ></div>';
							  
				var amd_HeadTag = $(document).find('head');
				var amd_StyleTag = amd_HeadTag.find('style');
				amd_StyleTag = ( amd_StyleTag.length )	? amd_StyleTag[0] : createStyleTag();

				if( true ) amd_StyleTag.append(css);
				
				var defaults = {
									message		:{'text':'Do you want to continue?.'},
								 headerStyle	:{},
									  btnStyle	:{},
								 containerStyle :{},
							  };
								 

				var styleOptions = $.extend(defaults, options); 
				
				var alertMsgStr = ( $("#amd_alertMsgDiv").length ) ? $("#amd_alertMsgDiv") : htmlStr;
		
				$("body").append(alertMsgStr);
				
				var alertBin = $("#amd_alertMsgDiv");
				var overlayBin = $("#amd_overlay");
				
				alertBin.slideDown('slow');
				overlayBin.fadeIn('slow');
							
				// message Style
				{
					$('#amd_message',alertBin).html(styleOptions.message["text"]);
					for(cssprop in styleOptions.message) {
						$('#amd_message',alertBin).css(cssprop, styleOptions.message[cssprop]);
					}
				}
				
				//container Style 
				{					
					for(cssprop in styleOptions.containerStyle) {
						alertBin.css( cssprop, styleOptions.containerStyle[cssprop] );
					}			
				}
				
				//Button Style 
				{
					for(cssprop in styleOptions.btnStyle) {
						$('.amd_submit',alertBin).css( cssprop , styleOptions.btnStyle[cssprop] );
					}
				}

				//Header Style 
				{
					$("#amd_confirmheader",alertBin).html(styleOptions.headerStyle["text"]);
					for(cssprop in styleOptions.headerStyle) {
						$('#amd_confirmheader',alertBin).css( cssprop , styleOptions.headerStyle[cssprop] );			
					}
				}

				$("#amd_cancel",alertBin).unbind('click').bind('click',function(){
					returnCallback(false);
					hidepopupboxes();
				});
				
				$("#amd_ok",alertBin).unbind('click').bind('click',function(){
					returnCallback(true);
					hidepopupboxes();
				});
				
				function hidepopupboxes(){
					alertBin.slideUp('slow');
					overlayBin.fadeOut('slow');
				}
				
				function returnCallback(response) {

					if (typeof callback == 'function') {					
						callback.call(this,response,curEl);
					}
				}
				
				function createStyleTag(){
					var tempStyle = $(document.createElement('style'));
					tempStyle.attr({
								type: "text/css",
							  });;
					amd_HeadTag.append(tempStyle)
					return tempStyle;
				}
		}		 
	 });  
 })(jQuery);
 
 /********************** CUSTOM ALERT CSS ******************/
 var css =	'#amd_btncontainer{'+
		'text-align:center; '+
	'}'+
	'#amd_btncontainer input{'+ 
		'margin:0 10px 10px 0; '+
	'}'+
	'#amd_message {'+
		'text-align:center; '+
		'margin: 10px; '+
		'color:#000; '+
		'font-size:12px; '+
	'}'+
	'#amd_alertMsgDiv {'+
		'display:none; '+
		'width:300px; '+
		'background-color: white; '+
		'z-index:99999; '+
		'position:absolute; '+
		'left:40%; '+
		'top:40%; '+
		'-moz-box-shadow: 0 0 3px 2px #999; '+
		'-webkit-box-shadow: 0 0 3px 2px #999; '+
		'box-shadow: 0 0 3px 2px #999; '+
		'-moz-border-radius: 4px; '+
		'-webkit-border-radius: 4px; '+
		'border-radius: 4px; '+
	'}'+
	'#amd_confirmheader{'+
		'height: 20px; '+
		'padding: 5px; '+
		'border-bottom: 1px solid #ECECEC; '+
		'color: #666; '+
		'font-size: 14px; '+
		'font-weight: bold; '+
		'margin: 5px; '+
	'}'+
	
	'#amd_overlay{'+
		'background-color: rgb(0, 0, 0); '+ 
		'opacity: 0.6; '+ 
		'cursor: pointer; '+ 
		'display: block; '+
		'position:absolute; '+
		'left:0; '+
		'top:0; '+
		'width:100%; '+
		'height:100%; '+
		'z-index: 1100; '+
	'}'+
	
	'input.amd_submit {'+
	    /* Safari 4+, Chrome 1-9 */
	   ' background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#404040), to(#141414)); '+
	
	    /* Safari 5.1+, Mobile Safari, Chrome 10+ */
	    'background-image: -webkit-linear-gradient(top, #404040, #141414); '+
	
	    /* Firefox 3.6+ */
	    'background-image: -moz-linear-gradient(top, #404040, #141414); '+
	
	    /* IE 10+ */
		'background-image: -ms-linear-gradient(top, #404040, #141414); '+
	
	    /* Opera 11.10+ */
		'background-image: -o-linear-gradient(top, #404040, #141414); '+
	    'border: 1px solid #111111; '+
	    '-webkit-border-radius: 2px; '+
	    '-moz-border-radius: 2px; '+
	    'border-radius: 5px; '+
	    'margin-top: 10px; '+
	    'color: #fff; '+
	    'font-size: 13px; '+
	    'font-weight: bold; '+
	    'padding: 5px 15px; '+
	    'height: 35px; '+
	    'cursor: pointer; '+
	'}';

 /************************************** CUSTOM ALERT***************************************/ 
