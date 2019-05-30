<table class="list_table" style="font-size:13px;">
    <thead>
    <tr style="height:30px;">
        <th width="140px">id</th>
        <th width="159px">标题</th>

        <th width="180px">状态</th>

        <th>操作</th>
    </tr>
    </thead>
    <tbody>
    <#list questionList as question>
    <tr>
        <td>${(question.id)!}</td>

        <td>${(question.title)!}</td>

        <td>-- </td>

    <td>
        <a href="javascript:void(0)" onclick="toEdit(${question.id?c})">编辑</a>
    </td>
    </tr>
        </#list>
        </tbody>
</table>
