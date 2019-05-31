package com.lucifer.service.cms;

import com.lucifer.mapper.AnswerMapper;
import com.lucifer.mapper.QuestionMapper;
import com.lucifer.model.Answer;
import com.lucifer.model.Question;
import com.lucifer.utils.Result;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;

import javax.annotation.Resource;
import java.util.List;

@Service
public class QuestionService {

    @Resource
    QuestionMapper questionMapper;

    @Resource
    AnswerMapper answerMapper;

    final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Transactional
    public Result addUserSubmit(Question question){
        questionMapper.insertQuestion(question);
        List<Answer> answerList = question.getAnswerList();
        logger.info("question id is {}",question.getId());
        for (Answer answer: answerList) {
            answer.setQuestionId(question.getId());
            answerMapper.insertAnswer(answer);
        }
        return Result.ok();
    }
}
