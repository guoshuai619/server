app.directive('serverDirective',function(){
   return {
       templateUrl:'App/view/template/_server.html',
       link:function(){
           var myswiper = new Swiper('.swiper-container',{
               pagination : '.swiper-pagination',
               paginationClickable:true,
               longSwipesRatio: 0.3,
               touchRatio:1,
               observer:true,//修改swiper自己或子元素时，自动初始化swiper
               observeParents:true,//修改swiper的父元素时，自动初始化swiper
           })
       }
   }
});