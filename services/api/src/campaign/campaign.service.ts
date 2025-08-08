import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CampaignService {
  constructor(private prisma: PrismaService) {}

  async create(businessId: string, name: string) {
    return this.prisma.campaign.create({ data: { businessId, name, objective: 'LEADS', plannedBudgetCents: 0 } });
  }
}
