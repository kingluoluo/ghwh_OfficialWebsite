// JavaScript Document

/* 2017年6月15日16:50:47 */

/*-------------------------------------------------   banner封装    --------------------------------------------------------------*/

<!---------------------    ( index )banner-con(banner内容展示的效果封装)  -------------------------->

/* 内容滑入事件 */
function conShow(thisIndex){
	//console.log("conShow"+thisIndex);
	//console.log( $('.banner-list li').eq(thisIndex).find("img").eq(1));

	$('.banner-list li').eq(thisIndex).find("img").eq(1).animate({
		padding: 0,
		opacity: 1

	},800);
}

/*  内容初始化  */
function conHide(){
	$(".banner-list li").each(function(){
	  $(this).hide();
	  $(this).find("img").eq(1).animate({
			paddingLeft: '80%',
			opacity: 0
		},0);
	});
};


<!---------------------    (index)banner-list(鼠标点击左右按钮事件封装)  -------------------------->
var num_i = 0;
var num_j = -1;
function e_temp(obj){
	num_j = obj;
	}


/*  切换至前一个   */
function slide_sub(){

			conHide();

			$(".banner-list-circle li").eq(num_i).css("background-color","#ccc");
			num_i--;
			console.log(num_i);
			if( num_i>0 || num_i===0 ){
				//alert("This is num  if first"+num);
				$(".banner-list li").each(function(){
									 			$(this).hide();
									 			});	
				$(".banner-list li").eq(num_i).show();
				conShow(num_i);
				$(".banner-list-circle li").eq(num_i).css("background-color","#fff");
			}else{				
				$(".banner-list li").each(function(){
									 			$(this).hide();
									 			});
				num_i=($(".banner-list li").length-1);
				$(".banner-list li").eq(num_i).show();
				conShow(num_i);
				$(".banner-list-circle li").eq(num_i).css("background-color","#fff");
				}	
			//alert("This is num  end"+num);	
			}

/*  切换至后一个   */		
function slide_add(){

			conHide();

			if(num_j == -1){
				$(".banner-list-circle li").eq(num_i).css("background-color","#ccc");
				num_i++;
				if(num_i<$(".banner-list li").length){		
					$(".banner-list li").each(function(){
										 			$(this).hide();
										 			});
					$(".banner-list li").eq(num_i).show();
					conShow(num_i);
					$(".banner-list-circle li").eq(num_i).css("background-color","#fff");
				}else{
					num_i=0;
					$(".banner-list li").each(function(){
										 			$(this).hide();
										 			});
					$(".banner-list li").eq(num_i).show();
					conShow(num_i);
					$(".banner-list-circle li").eq(num_i).css("background-color","#fff");
				}
			}else{
				//console.log(num_j);
				num_i=num_j;
				$(".banner-list-circle li").eq(num_i).css("background-color","#ccc");
				num_i++;

				if(num_i<$(".banner-list li").length){		
					$(".banner-list li").each(function(){
										 			$(this).hide();
										 			});
					$(".banner-list li").eq(num_i).show();
					conShow(num_i);
					$(".banner-list-circle li").eq(num_i).css("background-color","#fff");
				}else{
					num_i=0;
					$(".banner-list li").each(function(){
										 			$(this).hide();
										 			});
					$(".banner-list li").eq(num_i).show();
					conShow(num_i);
					$(".banner-list-circle li").eq(num_i).css("background-color","#fff");
				}
				num_j=-1;	
			}
	};
	

/*-------------------------------------------------   main封装    --------------------------------------------------------------*/

<!---------------------    (about)main-about(鼠标点击左右按钮事件)  ----------------------->
var num_a=0;
function slide_door_about_sub(){
	$(".main-about-intro").hide();
	num_a--;
	if(num_a>0&num_a<$(".main-about-intro").length)
	{	
		$(".main-about-intro").eq(num_a).show();
	}
	else{
			num_a=0;
			$(".main-about-intro").eq(num_a).show();
		}
		
}
function slide_door_about_add(){
	$(".main-about-intro").hide();
	num_a++;
	if(num_a>0&num_a<$(".main-about-intro").length)
	{	
		$(".main-about-intro").eq(num_a).show();
	}
	else{
			num_a=$(".main-about-intro").length-1;
			$(".main-about-intro").eq(num_a).show();
			 $(".main-button-about-right").attr("background-color",null);
		}
}



<!---------------------    布局margin-right  clear  封装----------------------->			
function clearMarginRight(className,rowNumber){
	$(className).each(function(){
		var liTemp = $(this).index()+1;
		if( liTemp % rowNumber == 0 ){
			$(this).addClass('marginRightClear');
		}
	});
}






$(function(){
/*-------------------------------------------------   banner    --------------------------------------------------------------*/

<!---------------------    (index)banner-list(初始化广告样式  左右按钮显示隐藏和点击事件)  -------------------------->
		  	/* 初始化   li隐藏      初始化  banner动画 显示在屏幕中间 */
		   $(".banner-list li").each(function(){
				$(this).hide();
				$(this).find('img').eq(1).css({					
					position: 'absolute',
				    left: 0,
				    right: 0,
				    top: 0,
				    bottom: 0,
					margin: 'auto',
					paddingLeft: '80%',
					opacity: 0
				});
			});


		   /* 初始化   第一个li显示  */
		   $(".banner-list li:first").show();

		   conShow(0);

  			 									
  			/* 左右按钮点击事件 */
		   $("#slideUp").click(function(){
										  slide_sub();
										  })
		   $("#slideDown").click(function(){	
										  slide_add();
		                       	          });

		   /*  改变 按钮透明度 事件  鼠标滑入banner */
		   $(".banner-box").mouseenter(function(){                       //鼠标上移加深按钮透明度
												$(".banner-list-slide img").css({"opacity":"0.3 "});
												}); 
		   $(".banner-box").mouseleave(function(){
												$(".banner-list-slide img").css({"opacity":"0 "});       //鼠标下移还原按钮透明度
												}); 
		   /*  改变 按钮透明度 事件   鼠标滑入btn*/
		   $("#slideUp").mouseenter(function(){
		   										$(this).css({"opacity":"0.8"});
		   									});
		   $("#slideUp").mouseleave(function(){
		   										$(this).css({"opacity":"0.3"});
		   									});
		   $("#slideDown").mouseenter(function(){
		   										$(this).css({"opacity":"0.8"});
		   									});
		   $("#slideDown").mouseleave(function(){
		   										$(this).css({"opacity":"0.3"});
		   									});


		   <!---------------------    (index)banner-list-circle(小圆点定位)  -------------------------->

		   for(i=0;i<$(".banner-list li").length;i++)				 //通过计算广告列表决定圆点列表li的个数		
		   {	   
		    	$(".banner-list-circle").append(" <li></li>");
		   }
		   var temp_circle=0;										  //计算定位时的margin-left值		
		   temp_circle=parseInt($(".banner-list-circle").width());	   
		   var circle=0;
		   circle=((temp_circle-8)/2);
		   //console.log(circle);
		   $(".banner-list-circle").css("margin-left","-"+circle+"px");//定位


		   <!---------------------    (index)banner-list(广告定时器)  -------------------------->

		   var interval												  //初始化定时器 
		   function run() {  
              			  interval = setInterval(function(){ slide_add(); }, "4000");  
           }  
		   //run();
		   		   
		   $(".banner-x").mouseenter(function(){                        //鼠标上移事件
											clearTimeout(interval);    //关闭定时器
											});  		   
                 
		   $(".banner-x").mouseleave(function(){                         //鼠标下移
											run();                     //打开定时器
											});
		   $(".banner-list-circle li").each(function(){                        //小圆点 鼠标上移事件
						 $(this).bind("mouseenter",function(){  
								   $(".banner-list li").each(function(){
									  $(this).hide();
									});

								   conHide();

								   $(".banner-list-circle li").each(function(){
												  $(this).css("background-color","#ccc");
									});

								   $(this).css("background-color","#fff");
								   $(".banner-list li").eq($(this).index()).show();
								   conShow($(this).index());
								   e_temp($(this).index());
					   });   //关闭定时器
		   });  

/*-------------------------------------------------   main    --------------------------------------------------------------*/
			<!---------------------    (index)main-index(首页布局margin-right  clear)  ----------------------->			
			clearMarginRight(".main-index-product-list li", 4);		//产品
			clearMarginRight(".main-index-news-info li", 2);		//新闻资讯
			clearMarginRight(".main-bottom-partner-list li", 6);		//合作伙伴

		   <!---------------------    (about)main-about(关于我们 公司优势 信息显示)  ----------------------->
		   	/*$(".main-showImg li").each(function(){
		 		var mainshowMesLiTemp = $(this).index();
		   		$(this).mouseenter(function(event) {
		 			//console.log( $(this).index() );
		   			//console.log( $(".main-showMes li").eq( mainshowMesLiTemp ) );

		   			$(".main-showMes li").eq( mainshowMesLiTemp ).addClass('main-showMesLiShow');
		   		});
		   		$(".main-showMes li").eq( mainshowMesLiTemp ).mouseleave(function(event) {
		 			//console.log( $(this).index() );
		   			//console.log( $(".main-showMes li").eq( mainshowMesLiTemp ) );

		   			$(this).removeClass('main-showMesLiShow');
		   		});
		   	});*/

			<!---------------------    ( product ) product-鼠标滑动效果 addClass ----------------------->
			$(".main-product-list li").each(function(){
				$(this).mouseenter(function(){
					$(this).addClass('liMoveTop');
				});
				$(this).mouseleave(function(){
					$(this).removeClass('liMoveTop');
				});
			});

		   	<!---------------------    ( product ) product-布局   margin-right  clear ----------------------->
		   	clearMarginRight(".main-product-list li", 4);		//产品列表

		   	<!---------------------    ( new ) news   margin-right  clear ----------------------->
		   	clearMarginRight(".main-news-x-title li", 4);		//产品列表


		   <!---------------------    ( join )main-join-top-list(加入我们滑动效果)  ----------------------->
		   //(join)main-join-top-list（初始化样式----职位介绍隐藏）   
			$("dd").each(function(){
								  	$(this).hide();
								  })

			$("dt:odd").each(function(){		//奇数背景颜色初始化
									  $(this).css("background-color","#FFF");
									  })

				
			//join dt 鼠标点击 展开职位介绍 事件
			function joinSlide(movement,upTime,downTime,classOne,classTwo){

				//奇数
				$(".main-join-list dt:odd").bind( movement, function(){
					if( $(this).attr("class") == classOne ){
						$(this).removeClass(classOne);
						$(this).next().slideUp(upTime);
					}else{
						$(this).addClass(classOne);
						$(this).next().slideDown(downTime);
					}
				});

				//偶数
				$(".main-join-list dt:even").bind( movement, function(){
					if( $(this).attr("class") == classTwo ){
						$(this).removeClass(classTwo);
						$(this).next().slideUp(upTime);
					}else{
						$(this).addClass(classTwo);
						$(this).next().slideDown(downTime);
					}
				});

			}
			joinSlide( "click",300,300,"dtOddOn","dtEvenOn" );
			
			<!------------------------    ( join ) join 显示   ---------------------------->
			$(".main-join-list-title").each(function() {
				$(this).mouseenter(function() {
					$(this).next().css({
						display: 'block'				
					});;
				});
				$(this).mouseleave(function() {
					$(this).next().css({
						display: 'none'				
					});;
				});
			});

		   <!------------------------    (goback)(回到顶部按钮)   ---------------------------->
		  	$(".goBack_box").hide();
		  	//检测屏幕高度    
	        //scroll() 方法为滚动事件  
	        $(window).scroll(function(){  
	            if ($(window).scrollTop()>400){  
	                $(".goBack_box").fadeIn(500);  
	            }else{  
	                $(".goBack_box").fadeOut(500);  
	                }  
	        });  
	        $(".goBack_box").click(function(){  
	            $('body,html').animate({scrollTop:0},100);  
	            return false;  
	        }); 


	         <!------------------------    (map)main  onMapMes(联系我们 地图上信息显示隐藏)   ---------------------------->
	         var onMapMesBtnB = true;
	         $(".onMapMesBtn").click(function(){
	         	if( onMapMesBtnB ){
		         	$(this).parent().animate({right: '-350px'},500);
		         	$(this).html("<");
		         	onMapMesBtnB = false;
		         	console.log( "向右完成" );
	         	}else{
	         		$(this).parent().animate({right: 0},500);
		         	$(this).html(">");
		         	onMapMesBtnB = true;
		         	console.log( "向左完成" );
	         	}
	         });
	         
});   