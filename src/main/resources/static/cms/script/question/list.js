function toDelete(id){
    layer.confirm('确定要删除吗？', {
      btn: ['取消','确定'] //按钮
    }, function(){
      layer.closeAll();
    }, function(){
      deleteSubmit(id);
    });
}

function deleteSubmit(id){

    url = "/cms/question/"+id+"/delete";
    var data_send = {};

    var delete_request =$.ajax({
       type: 'post',
       url: url,
       data: data_send,
       dataType: 'json'
    });

    delete_request.fail(function( jqXHR, textStatus ) {
      if(jqXHR.status==401){
         //openWeiboLogin();

      }
    });

    delete_request.done(function(data) {
        layer.msg("删除成功",{icon: 6});
         setTimeout(function(){
           window.location.reload();
         },2000)
    });
}