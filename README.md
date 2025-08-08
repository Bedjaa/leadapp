# LeadApp Monorepo

Monorepo containing web, mobile, and API for the Lead generation SaaS.

## Prerequisites
- Node 20
- pnpm
- Docker

## Setup
```bash
pnpm i
cp .env.example .env
docker compose up -d db redis
pnpm -w run migrate
pnpm -w run dev
```
This starts the API on :4000 and web on :3000.

## Tests
Run API e2e tests:
```bash
pnpm -w test
```

## First Run
1. Sign up a user via `POST /api/auth/signup`.
2. Start the QA flow via `POST /api/qa/start`.
3. Use `/api/upload/sign` to get a URL for uploads.
4. Create campaigns and continue the onboarding flow.

## Notes
External integrations (Meta, Stripe, OpenAI, SendGrid, Twilio) are stubbed for local development and testing.
