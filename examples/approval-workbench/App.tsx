import "calmo-ui/tokens.css";
import "calmo-ui/styles.css";
import {
  Banner,
  Button,
  Card,
  List,
  ListHeader,
  ListRow,
  Result,
  Stack,
  TopBar,
} from "calmo-ui";

export default function App() {
  return (
    <Stack gap={20}>
      <TopBar title="Approval workbench" subtitleBottom="Built with calmo-ui" />
      <Banner tone="accent" title="5 items need review" description="Use compact rows and clear confirmation surfaces." />
      <Card>
        <List>
          <ListHeader title="Pending requests" />
          <ListRow title="Payout policy update" description="Operations · 4m ago" />
          <ListRow title="Treasury transfer approval" description="Finance · 18m ago" />
        </List>
      </Card>
      <Result
        tone="success"
        title="Approval completed"
        description="The request moved to the next settlement step."
        primaryAction={{ label: "Open details" }}
      />
      <Button>Review next item</Button>
    </Stack>
  );
}

