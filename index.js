$(function(){
    $.fn.extend({
        switch:function(obj){
            //接口
            obj.tabcontent=obj.tabcontent||'img';
            obj.Color=obj.Color||'#aFFFbF';
            obj.effect='slide'||'fade';
            
            if(obj.tabcontent){
                var item=$(this).find(obj.tabcontent);
                for(var i=0;i<item.length;i++){
                    item.eq(i).hide();
                    item.eq(0).show()
                }
            }
            //创建切换按钮
            var ul=$('<ul></ul>');
            $(this).append(ul);
            ul.css({
                margin:'10px 5px'
            })
            $(this).css({
                margin:'10px auto'
            })
            for(var i=0;i<item.length;i++){
                var li=$('<li></li>');
                ul.append(li);
                li.css({
                    backgroundColor:'#aFFFbF',
                    padding:'5px 10px',
                    color:'#FFF',
                    fontSize:'16px',
                    width:'50px',
                    height:'20px',
                    float:'left',
                    marginLeft:'10px',
                    listStyle:'none',
                    cursor:'pointer',
                    borderRadius:'5px',
                    textAlign:'center'
                })
            }
            var btn=$('ul').find('li')
            btn.eq(0).html('一')
            btn.eq(1).html('二')
            btn.eq(2).html('三')
            btn.eq(3).html('四')
            btn.eq(4).html('五')
            btn.mouseover(function(){
            $(this).css({
                backgroundColor:obj.Color
            })
            })
            btn.mouseout(function(){
                $(this).css({
                    backgroundColor:'#aFFFbF'
                })
            })
            //按钮点击事件
            if(obj.effect=='fade'){
                btn.click(function(){
                    var now=$(this).index()
                    item.hide();
                    item.eq(now).fadeIn();
                })
            }else{
                //滑动
                item.show()
                item.css({
                    display:'block',
                    float:'left'
                })
                $(obj.tabcontent).closest('div').css({
                    width:item.width()*(item.length),
                    height:item.eq(0).height()
                })
                $(this).css({
                    width:item.eq(0).width(),
                    overflow:'hidden'
                })
                item.hide();
                item.eq(0).show()
                btn.click(function(){
                    var now=$(this).index()
                    item.eq(now).css({
                        display:'block'
                    })
                    $(obj.tabcontent).closest('div').animate({
                        marginLeft:-now*item.width()
                    })
                })
            }  
        }
    }) 


    $('.context').switch({
        tabcontent:'img',
        Color:'blue',
        effect:'slide'
    })
})
