package com.lucifer.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class MemberController {

    @RequestMapping(value = "/user-info",method = RequestMethod.GET)
    public String toLogin(){
        return   "/web/user-info";
    }
}
