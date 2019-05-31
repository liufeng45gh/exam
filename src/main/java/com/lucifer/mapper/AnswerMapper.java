package com.lucifer.mapper;

import com.lucifer.annotation.MapperScanSelf;
import com.lucifer.model.Answer;

@MapperScanSelf
public interface AnswerMapper {

    Integer insertAnswer(Answer answer);
}
