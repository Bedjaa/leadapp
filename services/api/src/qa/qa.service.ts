import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

const DEFAULT_QUESTIONS = [
  'What problem does your product solve?',
  'Who is your target audience?',
  'What is your unique value proposition?',
];

@Injectable()
export class QaService {
  constructor(private prisma: PrismaService) {}

  start() {
    return { questions: DEFAULT_QUESTIONS };
  }

  async answer(businessId: string, answers: any) {
    const flow = await this.prisma.qAFlow.create({
      data: {
        businessId,
        questions: DEFAULT_QUESTIONS as any,
        answers,
        script: 'Sample script based on answers.'
      }
    });
    return { script: flow.script };
  }
}
