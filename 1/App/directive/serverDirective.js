app.directive('serverDirective',function(){
   return {
       templateUrl:'App/view/template/_server.html',
       link:function(){
           var myswiper = new Swiper('.swiper-container',{
               pagination : '.swiper-pagination',
               paginationClickable:true,
               longSwipesRatio: 0.3,
               touchRatio:1,
               observer:true,//�޸�swiper�Լ�����Ԫ��ʱ���Զ���ʼ��swiper
               observeParents:true,//�޸�swiper�ĸ�Ԫ��ʱ���Զ���ʼ��swiper
           })
       }
   }
});