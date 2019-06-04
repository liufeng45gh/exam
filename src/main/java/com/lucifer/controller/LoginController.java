package com.lucifer.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;

@Controller
public class LoginController {


    @RequestMapping(value = {"/","index"},method = RequestMethod.GET)
    public String index(HttpServletRequest request){
        request.setAttribute("independent",false);
        return  "/web/index";
    }

    @RequestMapping(value = "/login",method = RequestMethod.GET)
    public String toLogin(){
        return   "/web/login";
    }
}