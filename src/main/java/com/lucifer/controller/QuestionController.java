package com.lucifer.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
public class QuestionController {

    @RequestMapping(value = {"/","index"})
    public String index(HttpServletRequest request){
        request.setAttribute("independent",false);
        return  "/web/index";
    }
}
