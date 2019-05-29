package com.lucifer.interceptor;

import com.lucifer.mapper.oauth2.UserMapper;
import com.lucifer.model.AccessToken;


import com.lucifer.service.cms.UserLoginService;
import com.lucifer.utils.Constant;


import com.lucifer.utils.RequestUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
public class CmsCheckAuthInterceptor extends HandlerInterceptorAdapter{
	
	private  Logger logger = LoggerFactory.getLogger(this.getClass());

	@Resource
	private UserLoginService userLoginService;

	@Resource
	private UserMapper userMapper;

	@Override
	/**
	 * 在请求处理之前进行调用（Controller方法调用之前）
	 */
	public boolean preHandle(HttpServletRequest request,
            HttpServletResponse response, Object handler) throws Exception{

		logger.info("checkAuth method has been called");
		//log.info(request.getPathInfo());
		//log.info(request.getPathTranslated());
		//log.info(request.getContextPath());
		//log.info(request.getRequestURI());
//		if(true) {
//			return true;
//		}
		if("/cms/login".equals(request.getRequestURI())){
			return true;
		}
		if(request.getRequestURI().startsWith("/cms/css")){
			return true;
		}
		if(request.getRequestURI().startsWith("/cms/images")){
			return true;
		}
		if(request.getRequestURI().startsWith("/cms/script")){
			return true;
		}
		if(request.getRequestURI().startsWith("/cms/fonts")){
			return true;
		}
		String token = RequestUtils.getCookie(Constant.ADMIN_ACCESS_TOKEN,request);
		logger.info("token is: {}",token );
		if(null==token){
			//throw new Exception("not login!");
			response.sendRedirect("/cms/login");
			return false;
		}

		AccessToken accessToken = userMapper.getAccessTokenByToken(token);
		//User user = (User)request.getSession().getAttribute(Constant.KEY_CMS_USER);
		if(null==accessToken){
			//throw new Exception("not login!");
			response.sendRedirect("/cms/login");
			return false;
		}
		return true;
		
	}
	

}
