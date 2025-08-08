import { Body, Controller, Post } from '@nestjs/common';
import { CampaignService } from './campaign.service';
import { IsString } from 'class-validator';

class CreateCampaignDto {
  @IsString()
  businessId: string;
  @IsString()
  name: string;
}

@Controller('campaign')
export class CampaignController {
  constructor(private campaigns: CampaignService) {}

  @Post('create')
  create(@Body() dto: CreateCampaignDto) {
    return this.campaigns.create(dto.businessId, dto.name);
  }
}
