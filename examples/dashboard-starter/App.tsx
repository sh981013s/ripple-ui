import "calmo-ui/tokens.css";
import "calmo-ui/styles.css";
import {
  BarChart,
  Card,
  List,
  ListHeader,
  ListRow,
  Stack,
  TopBar,
} from "calmo-ui";

export default function App() {
  return (
    <Stack gap={20}>
      <TopBar title="Operations dashboard" subtitleBottom="Built with calmo-ui" />
      <Card>
        <Stack gap={16}>
          <ListHeader title="Revenue" description="Weekly payment volume" />
          <BarChart
            items={[
              { label: "Mon", value: 42 },
              { label: "Tue", value: 67 },
              { label: "Wed", value: 58 },
              { label: "Thu", value: 84 },
            ]}
          />
        </Stack>
      </Card>
      <Card>
        <List>
          <ListHeader title="Recent events" />
          <ListRow title="New payout account connected" description="2 minutes ago" />
          <ListRow title="Approval policy updated" description="14 minutes ago" />
        </List>
      </Card>
    </Stack>
  );
}

