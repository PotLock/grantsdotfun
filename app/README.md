# 🎮 GRANTS.FUN

GRANTS.FUN is an autonomous grant operator platform built on NEAR Protocol, designed to create and manage AI-powered grant distribution systems. It provides mechanisms for deploying AI agents that can autonomously evaluate and distribute grants based on social signals, particularly from Twitter/X.

## ✨ Key Features
- 🤖 AI Grant Operators: Deploy autonomous agents that evaluate and distribute grants
- 🐦 Social Integration: Direct integration with Twitter/X for applications
- 👥 Multi-reviewer System: Set up multiple reviewers for grant evaluation
- 🏛️ Token-based Governance: Use GRant OPERATOR tokens for criteria setting
- 💸 On-chain Payments: Automated grant distribution across chains
- 🧠 Built on Eliza Framework: Robust AI agent capabilities

## Tech Stack

- **Framework**: Next.js 15.1.5
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide Icons
- **Fonts**: Geist Sans & Geist Mono
- **Development Tools**: ESLint, Turbopack

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/louisdevzz/grants-fun.git
cd grants-fun
```

2. Install dependencies:
```bash
pnpm install
```
3. Create a `.env` file in the root directory with the following variables:
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Add components from shadcn/ui

```bash
pnpm dlx shadcn@latest add component-name
```

## Run tests (coming soon)
```bash
pnpm test # run tests all
# or
pnpm test:ui # run tests with ui
```

## Development

- `pnpm dev` - Start the development server with Turbopack
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint for code quality

## Project Structure

```
grants-fun/
├── src/
│   ├── app/           # Next.js app directory
│   ├── components/    # Reusable UI components
│   │   └── ui/       # shadcn/ui components
│   └── lib/          # Utility functions
├── public/           # Static assets
└── ...config files
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
