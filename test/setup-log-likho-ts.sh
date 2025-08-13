#!/bin/bash

# Exit on error
set -e

# 1. Create a new folder and init Node.js project
PROJECT_NAME="log-likho-ts-test"
mkdir "$PROJECT_NAME"
cd "$PROJECT_NAME"
npm init -y

# 2. Install dependencies
npm install log-likho
npm install --save-dev typescript @types/node ts-node

# 3. Create tsconfig.json
npx tsc --init --rootDir src --outDir dist --esModuleInterop --module commonjs --target es2020

# 4. Create src folder and test file
mkdir src

cat > src/test.ts <<'EOF'
import { create_logger } from 'log-likho';

const logger = create_logger({
  logs_folder: "./logs",
  mode: "a",
  log_levels_to_file: ["ERROR", "FATAL"]
});

logger.info("Info log from TypeScript");
logger.warn("Warning log from TypeScript");
logger.error("Error log from TypeScript", new Error("Something failed"));
logger.fatal("Fatal log from TypeScript");
logger.log("Plain log from TypeScript");
EOF

# 5. Run the test using ts-node
npx ts-node src/test.ts
