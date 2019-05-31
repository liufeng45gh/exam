<!DOCTYPE html>
<html>
<head>
	<title>后台管理</title>
    <#include "../common_header.ftl"/>
    <script type="text/javascript" charset="utf-8" src="/ueditor-1.4.3.3/ueditor.config.js"></script>
    <script type="text/javascript" charset="utf-8" src="/ueditor-1.4.3.3/_examples/editor_api.js"> </script>
    <!--建议手动加在语言，避免在ie下有时因为加载语言失败导致编辑器加载失败-->
    <!--这里加载的语言文件会覆盖你在配置项目里添加的语言类型，比如你在配置项目里配置的是英文，这里加载的中文，那最后就是中文-->
    <script type="text/javascript" charset="utf-8" src="/ueditor-1.4.3.3/lang/zh-cn/zh-cn.js"></script>

</head>
<body style="zoom: 1;">
	<div class="b-container">
		<#include "../top_menu.ftl"/>
		 <div id="modulemenu" >
           <ul class="nav">
           <li data-id="list"><a id="currentItem" href="#">快速导航 <span class="icon-caret-right"></span></a></li>

           <li  data-id="task"><a href="/cms/goods/list">问题</a>
           </li>
           <li  data-id="story"><a href="/cms/goods/add">添加问题</a>
           </li>

           </ul>
        </div>
        <div id="wrap">
             <div class="outer with-side with-transition" style="min-height: 600px;">
                    <#include "left_menu.ftl"/>

                    <div id="admin_right">
                    			<div class="position"><span>问题</span><span>|</span><span>添加问题</span></div>
                    			<div class="content form_content" >
                                        <table class="table_new">
                                            <tbody>
                                                <tr><th width="20%"></th><td><span style="color:${KEY_RESULT_MESSAGE_COLOR?default("")};">${KEY_RESULT_MESSAGE?default("")}</span></td></tr>
                                                <tr>
                                                    <th width="20%" style="text-align:right;">问题标题:</th>
                                                    <td><input id="title_input"  class="form-control" name="name" style="display:inline-block;" /><label id="account_input_info" style="display:inline-block;">* 问题标题</label></td>
                                                </tr>
                                                <tr>
                                                    <th width="20%" style="text-align:right;">单选/多选:</th>
                                                    <td>

                                                        <select id = "isMoreSelect">
                                                            <option value="0"> 单选</option>
                                                            <option value="1">多选</option>
                                                        </select>
                                                        <!--
                                                         <input type="hidden" id="isMoreSelect" name="isMoreSelect"/>
                                                        <input id="isMoreSelect_input" readonly="readonly" class="form-control" name="category" style="display:inline-block;"/><label id="isMoreSelect_input_info" style="display:inline-block;">* 单选/多选</label>
                                                         -->
                                                    </td>
                                                </tr>

                                        </tbody>
                                    </table>
                                    <table style="display:none;" >
                                        <tbody id="answer-template" >
                                            <tr class="add-new">
                                                <th width="20%" style="text-align:right;"><label  style="display:inline-block;float:right;">*  答案内容</label></th>
                                                <td>
                                                    <input  class="form-control option"  style="width: 70px;display:inline-block;"/>
                                                    <input  class="form-control content"  style="display:inline-block;margin-left:3px;"/>
                                                    <label  style="display:inline-block;"></label>
                                                </td>
                                            </tr>
                                        </tbody>

                                    </table>
                                    <table class="table_new">
                                        <tbody id="answer-body">
                                                <tr>
                                                    <th width="20%" style="text-align:right;"></th>
                                                    <td>
                                                        <button class="btn btn-primary" type="button" onclick="addAnswer();">添加答案</button>
                                                    </td>
                                                </tr>

                                        </tbody>
                                    </table>
                                    <table class="table_new">
                                        <tbody>
                                            <tr>
                                                <th width="20%" style="text-align:right;">正确答案:</th>
                                                <td><input id="right_answer"  class="form-control"  style="display:inline-block;" /><label id="right_answer_input_info" style="display:inline-block;">* 正确答案</label></td>
                                            </tr>
                                            <tr>
                                                <th width="20%" style="text-align:right;">填写正确答案描述:</th>
                                                <td>
                                                    <textarea id="editor" style="width:1024px;height:500px;" name="content"></textarea>

                                                </td>
                                            </tr>
                                            <tr>
                                                <th></th>
                                                <td>
                                                    <button class="btn btn-primary"  onclick="return addSubmit();">保存设置</button>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>

                                </div>
                    </div>
             </div>
        </div>
	</div>

	<script type="text/javascript">
		//DOM加载完毕执行
		$(document).ready(function(){
			$("#left_menu_add").addClass("selected");
		});
		

	</script>


<div style="display: none; position: fixed; left: 0px; top: 0px; width: 100%; height: 100%; cursor: move; opacity: 0; background: rgb(255, 255, 255);"></div>
<script type="text/javascript" charset="UTF-8" src="/cms/script/question/add.js"></script>
<script type="text/javascript" charset="UTF-8" src="/cms/script/question/category-select.js"></script>


</body></html>