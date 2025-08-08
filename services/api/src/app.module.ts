import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { QaModule } from './qa/qa.module';
import { UploadModule } from './upload/upload.module';
import { CampaignModule } from './campaign/campaign.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), AuthModule, QaModule, UploadModule, CampaignModule],
})
export class AppModule {}
