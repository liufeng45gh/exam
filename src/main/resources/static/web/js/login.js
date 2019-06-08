function login(){
    var telephone = $("#telephone").val();
    if (telephone.trim()=="") {
        layer.msg("电话不能为空");
    }

    var password = $("#password").val();
    if (password.trim()=="") {
        layer.msg("密码不能为空");
    }

    var request_data = {};
    request_data.telephone = telephone;
    request_data.password = password;

    $.ajax({
         type: "POST",
         url: "/mobile/login",
         data: request_data,
         dataType: "json",
         success: function (data) {
              if (data.ok) {
                    layer.msg("登录成功",{icon: 6});
                  setTimeout(function(){
                    window.location.href = "/mobile/list";
                  },2000)
              }else {
                layer.msg("手机号或密码错误",{icon: 5});
              }

         },
         error: function (message) {
             layer.msg("系统错误",{icon: 5});
         }
     });
}



