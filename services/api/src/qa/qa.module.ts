import { Module } from '@nestjs/common';
import { QaController } from './qa.controller';
import { QaService } from './qa.service';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [QaController],
  providers: [QaService, PrismaService],
})
export class QaModule {}
