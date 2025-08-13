#!/bin/bash

# Exit on first error
set -e

# 1. Create project folder
PROJECT_NAME="log-likho-ts-test"
mkdir "$PROJECT_NAME"
cd "$PROJECT_NAME"

# 2. Init npm
npm init -y

# 3. Install dependencies
npm install log-likho
npm install --save-dev typescript @types/node tsx

# 4. Create src folder
mkdir src

# 5. Create tsconfig.json with your configs
cat > tsconfig.json <<'EOF'
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "allowImportingTsExtensions": true,
    "noEmit": true,
    "strict": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "outDir": "dist",
    "rootDir": "src"
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}
EOF

# 6. Create sample test.ts
cat > src/test.ts <<'EOF'
import simple_logger, { create_logger } from 'log-likho';

console.log = simple_logger();
console.log("Modifed simple logger!", {name: "neet"})

const logger = create_logger({
  logs_folder: "./logs",
  mode: "a",
  log_levels_to_file: ["ERROR", "FATAL"]
});

logger.info("Advanced logger")
logger.info("Info log from TSX project");
logger.warn("Warning log from TSX project");
logger.error("Error log from TSX project", new Error("Something failed"));
logger.fatal("Fatal log from TSX project");
logger.log("Plain log from TSX project");

EOF

# 7. Run the script using tsx
npx tsx src/test.ts
