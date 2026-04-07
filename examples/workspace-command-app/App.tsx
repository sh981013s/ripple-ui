import "calmo-ui/tokens.css";
import "calmo-ui/styles.css";
import {
  Button,
  Card,
  CommandPalette,
  List,
  ListHeader,
  ListRow,
  Stack,
  TopBar,
} from "calmo-ui";

export default function App() {
  return (
    <Stack gap={20}>
      <TopBar title="Workspace commands" subtitleBottom="Built with calmo-ui" rightButton={<Button size="small">Invite</Button>} />
      <Card>
        <CommandPalette
          items={[
            { title: "Open payouts", description: "Jump to payout table" },
            { title: "Create workspace", description: "Start a new team space" },
            { title: "Review approvals", description: "Open pending queue" },
          ]}
        />
      </Card>
      <Card>
        <List>
          <ListHeader title="Pinned actions" />
          <ListRow title="Team members" description="Manage access and roles" />
          <ListRow title="Billing settings" description="Invoices, plans, and payment methods" />
        </List>
      </Card>
    </Stack>
  );
}

