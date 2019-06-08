var questionIdList = [];
var currentIndex = 0;
var currentQuestion = {};
var rightList = [];
var wrongList = [];
$(function(){
    loadDataFormStorage();
    layer.load(1, {time: 10*1000});
    var url = "/mobile/enable-id-list";
    var _request =$.ajax({
       type: 'get',
       url: url,
       data: {},
       dataType: 'json'
    });

    _request.fail(function( jqXHR, textStatus ) {
         //openWeiboLogin();
        layer.msg("数据异常");

    });

    _request.done(function(data) {
       questionIdList = data.data;
       getCurrentQuestion();
       layer.closeAll();
    });
});

function getCurrentQuestion(){
    layer.load(1, {time: 10*1000});
    var id = questionIdList[currentIndex];

    var url = "/mobile/question/" + id;
    var _request =$.ajax({
       type: 'get',
       url: url,
       data: {},
       dataType: 'json'
    });

    _request.fail(function( jqXHR, textStatus ) {
         //openWeiboLogin();
        layer.msg("数据异常");

    });

    _request.done(function(data) {
       currentQuestion = data.data;
       showCurrentQuestion();
       layer.closeAll();
    });

}

function showCurrentQuestion(){
    if (currentQuestion.isMoreSelect == 1) {
         $("#single-select").text("[多选]");
    }else {
        $("#single-select").text("[单选]");
    }
    $("#title").text(currentQuestion.title);
    $("#right-answer").text(currentQuestion.rightAnswer);
    $("#right-answer-description").html(currentQuestion.rightAnswerDescription);
    var showCount = (currentIndex + 1) + "/" + questionIdList.length;
    $("#total-count").text(showCount);
    $(".answer").remove();
    var answerList = currentQuestion.answerList;

    var rtop = 10 + answerList.length * 4;
    rtop = rtop + "rem";
    $(".confirm-select").css({top: rtop});


    var rtop = -12 + answerList.length * 4;
    rtop = rtop + "rem";
    $(".right-answer-outer-div").css({top: rtop});
    $(".right-answer-outer-div").css({visibility: "hidden"});
    for (i=0; i<answerList.length ;i++) {
        var top = 9.0 + i * 4;
        top = top + "rem";
        var answer = answerList[i];
        var html = '<div class="answer" style="top: '+ top + ';"><div class="option" onclick="doSelect(this)">'+answer.option+'</div> <div class="option-text">'+answer.content+'</div> </div>';
        $("#outer-div").append(html);
    }
    //var html = '<div class="answer" style=""><div class="option">A</div> <div class="option-text">民事责任</div> </div>';

    refreshRightWrongCount();
}

function doSelect(object){
    if ($(object).hasClass("selected")) {
          $(object).removeClass("selected");
    }else {
        $(object).addClass("selected");
    }

}

function confirmSelect(){

    var isRight = 1;
    var answerSelectedList = $(".selected");
    if (answerSelectedList.length == currentQuestion.rightAnswer.length) {
        answerSelectedList.each(function(){
            var option = $(this).text();
            if (currentQuestion.rightAnswer.indexOf(option) == -1) {
                isRight = 0;
            }
        });
    }else {
        isRight = 0;
    }

    if (isRight == 1) {
        var index = rightList.indexOf(currentQuestion.id);
        if (index == -1) {
            rightList.push(currentQuestion.id);
        }
    }else {
        var index = wrongList.indexOf(currentQuestion.id);
        if (index == -1) {
            wrongList.push(currentQuestion.id);
        }
    }

    refreshRightWrongCount();

    $(".right-answer-outer-div").css({visibility: "visible"});


    var answerJQList = $(".option");
    answerJQList.each(function(){
        var option = $(this).text();
        if (currentQuestion.rightAnswer.indexOf(option)!= -1) {
            $(this).text("√");
            $(this).addClass("selected_right");
        }else {
            if ($(this).hasClass("selected")) {
                $(this).text("×");
                $(this).addClass("selected_wrong");
            }
        }
    });


}

function refreshRightWrongCount(){
    var rightCount = rightList.length;
    $(".right-count").text("√ " + rightCount);

    var wrongCount = wrongList.length;
    $(".wrong-count").text("× " + wrongCount);
    localStorage.setItem("rightList",JSON.stringify(rightList));
    localStorage.setItem("wrongList",JSON.stringify(wrongList));
    localStorage.setItem("currentIndex",currentIndex);
}

function loadDataFormStorage(){
    var rightListJson = localStorage.getItem("rightList" );
    var wrongListJson = localStorage.getItem("wrongList" );
    var currentIndexJson = localStorage.getItem("currentIndex" );
    if(null == rightListJson) {
        return;
    }
    if (null == wrongListJson) {
        return;
    }
    if (null == currentIndexJson) {
        return;
    }

    rightList = JSON.parse(rightListJson);
    wrongList = JSON.parse(wrongListJson);
    currentIndex = JSON.parse(currentIndexJson);

}

function preQuestion(){
    if (currentIndex <= 0) {
        layer.msg("已经是第一题");
        return;
    }
    currentIndex --;
    getCurrentQuestion();
}

function nextQuestion(){
     if (currentIndex >= (questionIdList.length-1)) {
        layer.msg("已经是最后一题");
        return;
    }
    currentIndex ++;
    getCurrentQuestion();
}