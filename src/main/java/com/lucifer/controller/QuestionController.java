package com.lucifer.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping(value = "/mobile")
public class QuestionController {

    @RequestMapping(value = "/list",method = RequestMethod.GET)
    public String toLogin(){
        return   "/web/list";
    }

    @RequestMapping(value = "/show-score",method = RequestMethod.GET)
    public String showScore(){
        return   "/web/show-score";
    }

    @RequestMapping(value = "/practice",method = RequestMethod.GET)
    public String practice(){
        return   "/web/practice";
    }

    @RequestMapping(value = "/mock-exam",method = RequestMethod.GET)
    public String mockExam(){
        return   "/web/mock-exam";
    }
}
