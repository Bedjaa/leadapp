require("ts-node/register");
const { describe, it, beforeAll, afterAll, expect } = require('vitest');
const { Test } = require('@nestjs/testing');
const request = require('supertest');
const { AppModule } = require('../src/app.module');
const { PrismaService } = require('../src/prisma.service');

let app;
let prisma;

describe('API e2e', () => {
  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleRef.createNestApplication();
    await app.init();
    prisma = app.get(PrismaService);
  });

  afterAll(async () => {
    await prisma.$disconnect();
    await app.close();
  });

  it('should signup user and return token', async () => {
    const res = await request(app.getHttpServer())
      .post('/api/auth/signup')
      .send({ email: 'test@example.com' })
      .expect(201);
    expect(res.body.user.email).toBe('test@example.com');
    expect(res.body.token).toBeDefined();
  });

  it('should return QA questions', async () => {
    const res = await request(app.getHttpServer())
      .post('/api/qa/start')
      .expect(201);
    expect(res.body.questions.length).toBeGreaterThan(0);
  });
});
