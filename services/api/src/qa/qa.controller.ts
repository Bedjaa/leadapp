import { Body, Controller, Param, Post } from '@nestjs/common';
import { QaService } from './qa.service';
import { IsString } from 'class-validator';

class AnswerDto {
  @IsString()
  businessId: string;

  answers: any;
}

@Controller('qa')
export class QaController {
  constructor(private qa: QaService) {}

  @Post('start')
  start() {
    return this.qa.start();
  }

  @Post('answer')
  answer(@Body() dto: AnswerDto) {
    return this.qa.answer(dto.businessId, dto.answers);
  }
}
