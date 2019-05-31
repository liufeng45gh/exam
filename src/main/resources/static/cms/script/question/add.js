$("#category_input").click(function (){
//    layer.open({
//      type: 2,
//      area: ['40%', '80%'],
//      fixed: false, //不固定
//      maxmin: true,
//      content: "/cms/category/tree-select"
//    });
    showMenu();

});

function selectNode(id,name){
    $("#category_id").val(id);
    $("#category_input").val(name);
    layer.closeAll();
}
$(function(){
    var ue = UE.getEditor('editor');
});

function addAnswer(){
    $("#answer-body").append($("#answer-template").html());
}

function addSubmit(){
    var title=$("#title_input").val();
    if(title.trim()==""){
        layer.msg("标题必须填写",{icon: 5});
        return false;
    }
    var right_answer=$("#right_answer").val();
    if(right_answer.trim()==""){
        layer.msg("正确答案必须填写",{icon: 5});
        return false;
    }

    var right_answer_description_txt = UE.getEditor('editor').getPlainTxt();
    if(right_answer_description_txt.trim()==""){
        layer.msg("正确答案解释必须填写",{icon: 5});
        return false;
    }
    var addNewElement = $("#answer-body").find(".add-new");
    if (addNewElement.length < 2) {
        layer.msg("答案至少添加两组",{icon: 5});
        return false;
    }
    addNewElement.each(function(){
        var option = $(this).find(".option").val();
        if (option.trim()=="") {
            layer.msg("答案数据需要填写完整",{icon: 5});
            return false;
        }
        var content = $(this).find(".content").val();
        if (content.trim()=="") {
            layer.msg("答案数据需要填写完整",{icon: 5});
            return false;
        }

     });

     var request_data = {};
     request_data.title = title;
     request_data.rightAnswer = right_answer;
     request_data.isMoreSelect = $("#isMoreSelect").val();
     request_data.rightAnswerDescription = UE.getEditor('editor').getContent();
    var answerList = [];
    addNewElement.each(function(){
           var answer = {};
           answer.option = $(this).find(".option").val();

           answer.content = $(this).find(".content").val();
           answerList.push(answer);

     });
     request_data.answerList = answerList;

     $.ajax({
         type: "POST",
         url: "/cms/question/add",
         contentType: "application/json; charset=utf-8",
         data: JSON.stringify(request_data),
         dataType: "json",
         success: function (data) {
              layer.msg("提交成功",{icon: 6});
         },
         error: function (message) {
             layer.msg("系统错误",{icon: 5});
         }
     });
    return true;
}
