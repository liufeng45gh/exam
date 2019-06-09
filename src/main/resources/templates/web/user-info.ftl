<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <title>答题系统</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"/>

    <!-- Link Swiper's CSS -->
    <link rel="stylesheet" href="/swiper/dist/css/swiper.min.css"/>
    <link rel="stylesheet" href="/web/css/mobile.css?v=1.0"/>
    <script  src="/web/js/jquery-3.1.1.js"></script>
    <script  type="text/javascript" src="/layer/layer.js"></script>
    <!-- Swiper JS -->
    <script src="/swiper/dist/js/swiper.min.js"></script>
    <script  type="text/javascript" src="https://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
    <script  type="text/javascript" src="/js/wx-share.js?version=1.0"></script>
    <script src="/web/js/common.js"></script>


</head>
<body>
<!-- Swiper -->
<link rel="stylesheet" href="/web/css/user-info.css"/>

<div class="page-bg-1">
    <img class="img-bg-1" src="/web/img/page1/bg.jpg"/>
    <img class="logo-1" src="/web/img/page1/logo.png"/>

    <div class="location">
        <div class="title-1" >
            请完善个人信息
        </div>


        <div class="title-3">
            <input placeholder="请输入姓名" class="name_input" id="nick_name"/>
        </div>
        <div class="title-4">
            <!--
            <input placeholder="请输入单位" class="name_input" id="department"/>
            -->
            <select class="name_input" id="department">
                <option value="">请输入单位</option>
                <option></option>
            </select>
        </div>


        <div class="btn-1" onclick="submitUserInfo();" >
            保存设置
        </div>


        <!--
        <a class="btn-1" style="display: block; " href="/list">
            保存
        </a>

          -->

    </div>






</div>


<!-- Initialize Swiper -->
<script src="/web/js/user-info.js"></script>

</body>
</html>
