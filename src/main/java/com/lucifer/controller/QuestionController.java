package com.lucifer.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;

@Controller
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
}
