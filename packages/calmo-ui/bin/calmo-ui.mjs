#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pkgRoot = path.resolve(__dirname, "..");
const distRoot = path.join(pkgRoot, "dist");

const blockTemplates = {
  "app-shell": `import "calmo-ui/tokens.css";
import "calmo-ui/styles.css";
import { Button, Card, List, ListHeader, ListRow, Stack, TopBar } from "calmo-ui";

export default function ProductShell() {
  return (
    <Stack gap={20}>
      <TopBar title="Workspace" subtitleBottom="Built with calmo-ui" rightButton={<Button size="small">Create</Button>} />
      <Card>
        <List>
          <ListHeader title="Recent activity" />
          <ListRow title="Approval updated" description="2 minutes ago" />
          <ListRow title="New team member invited" description="14 minutes ago" />
        </List>
      </Card>
    </Stack>
  );
}`,
  "settings-screen": `import { BottomInfo, Button, Card, Select, Stack, Switch, TextField } from "calmo-ui";

export default function SettingsScreen() {
  return (
    <Card>
      <Stack gap={16}>
        <TextField label="Workspace name" defaultValue="Calmo Labs" />
        <Select label="Region" defaultValue="de">
          <option value="de">Germany</option>
          <option value="uk">United Kingdom</option>
          <option value="us">United States</option>
        </Select>
        <Switch label="Email notifications" defaultChecked />
        <Button>Save changes</Button>
        <BottomInfo title="Saved instantly" description="Keep confirmations for destructive actions only." />
      </Stack>
    </Card>
  );
}`,
  "table-filters": `import { Button, Card, Inline, SearchField, Stack, Table, TopBar } from "calmo-ui";

export default function DataTableScreen() {
  return (
    <Stack gap={20}>
      <TopBar title="Payouts" subtitleBottom="Table + filters" />
      <Inline gap={10} wrap>
        <SearchField placeholder="Search payout" />
        <Button variant="weak">Status</Button>
        <Button variant="weak">Region</Button>
      </Inline>
      <Card>
        <Table
          columns={["Workspace", "Amount", "Status"]}
          rows={[
            ["Treasury", "EUR 4,200", "Ready"],
            ["Operations", "EUR 1,180", "Review"],
          ]}
        />
      </Card>
    </Stack>
  );
}`,
};

function log(message) {
  process.stdout.write(`${message}\n`);
}

function fail(message) {
  process.stderr.write(`${message}\n`);
  process.exit(1);
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function runInit() {
  const target = path.resolve(process.cwd(), "AGENTS.md");
  const source = path.join(distRoot, "templates", "AGENTS.md");

  if (!fs.existsSync(source)) {
    fail("Could not find bundled AGENTS.md template. Reinstall calmo-ui or build the package first.");
  }

  if (fs.existsSync(target)) {
    log("AGENTS.md already exists. Leaving it unchanged.");
    return;
  }

  fs.copyFileSync(source, target);
  log("Created AGENTS.md from calmo-ui template.");
}

function runAdd(name) {
  if (!name) {
    fail(`Usage: npx calmo-ui add <${Object.keys(blockTemplates).join("|")}>`);
  }

  const snippet = blockTemplates[name];
  if (!snippet) {
    fail(`Unknown block "${name}". Available: ${Object.keys(blockTemplates).join(", ")}`);
  }

  const outDir = path.resolve(process.cwd(), "calmo-snippets");
  const outPath = path.join(outDir, `${name}.tsx`);
  ensureDir(outDir);

  if (!fs.existsSync(outPath)) {
    fs.writeFileSync(outPath, `${snippet}\n`);
    log(`Created ${path.relative(process.cwd(), outPath)}`);
    return;
  }

  log(snippet);
}

const [, , command, arg] = process.argv;

if (!command || command === "--help" || command === "-h") {
  log("calmo-ui");
  log("");
  log("Commands:");
  log("  npx calmo-ui init               Create AGENTS.md in the current project");
  log("  npx calmo-ui add app-shell      Create a copy-paste app shell snippet");
  log("  npx calmo-ui add settings-screen");
  log("  npx calmo-ui add table-filters");
  process.exit(0);
}

if (command === "init") {
  runInit();
  process.exit(0);
}

if (command === "add") {
  runAdd(arg);
  process.exit(0);
}

fail(`Unknown command "${command}". Use --help for available commands.`);
