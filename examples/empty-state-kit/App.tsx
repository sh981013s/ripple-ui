import "calmo-ui/tokens.css";
import "calmo-ui/styles.css";
import {
  Button,
  EmptyState,
  Result,
  Stack,
  TopBar,
} from "calmo-ui";

export default function App() {
  return (
    <Stack gap={20}>
      <TopBar title="Empty state kit" subtitleBottom="Built with calmo-ui" />
      <EmptyState
        title="No workspaces yet"
        description="Create the first workspace to invite your team and set up routing rules."
        action={<Button>Create workspace</Button>}
      />
      <Result
        tone="success"
        title="Workspace created"
        description="Invite your team or connect billing to continue."
        primaryAction={{ label: "Invite team" }}
      />
    </Stack>
  );
}

