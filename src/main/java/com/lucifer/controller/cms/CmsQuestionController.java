package com.lucifer.controller.cms;

import com.lucifer.mapper.QuestionMapper;

import com.lucifer.model.Question;
import com.lucifer.utils.PageUtil;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class CmsQuestionController {

    @Resource
    QuestionMapper questionMapper;

    @RequestMapping(value="/cms/question/list",method = RequestMethod.GET)
    public String list(@RequestParam(value = "page",defaultValue = "1") Integer page,
                       @RequestParam(value = "title",required = false) String title,
                       HttpServletRequest request){
        Integer perPageCount = 30;
        Integer offset = (page - 1) * perPageCount;
        List<Question> goodsList = questionMapper.questionCmsSearchList(offset,perPageCount,title);
        request.setAttribute("questionList",goodsList);

        Integer matchRecordCount=questionMapper.questionCmsSearchCount(title);
        Integer totalPageCount= PageUtil.getTotalPageCount(matchRecordCount, perPageCount);

        PageUtil pageUtil = new PageUtil(request);
        String pageDiv = pageUtil.willPaginate(totalPageCount,  "pages_bar",new String []{"page","msg"});
        request.setAttribute("pageDiv",pageDiv);
        request.setAttribute("title",title);


        return "/cms/question/list";
    }

    @RequestMapping(value="/cms/question/add",method = RequestMethod.GET)
    public String toAddUser(){
        return "/cms/question/addQuestion";
    }

    @RequestMapping(value="/cms/is-more/list.json",method = {RequestMethod.GET,RequestMethod.POST})
    @ResponseBody
    public List isMoreJsonList(HttpServletRequest request){
        List list = new ArrayList();
        Map hashMap = new HashMap<>();
        hashMap.put("id", 0);
        hashMap.put("parentId", -1);
        hashMap.put("terminal", true);
        hashMap.put("name", "单选");
        list.add(hashMap);
        return list;
    }

}
