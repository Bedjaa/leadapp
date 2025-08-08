import { Controller, Get, Query } from '@nestjs/common';

@Controller('upload')
export class UploadController {
  @Get('sign')
  sign(@Query('s3Key') s3Key: string) {
    return { url: `https://example.com/upload/${s3Key}` };
  }
}
