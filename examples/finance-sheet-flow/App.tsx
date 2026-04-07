import "calmo-ui/tokens.css";
import "calmo-ui/styles.css";
import {
  Banner,
  BottomSheet,
  Button,
  Result,
  Stack,
  TextField,
  TopBar,
  useBottomSheet,
} from "calmo-ui";

export default function App() {
  const sheet = useBottomSheet();

  return (
    <Stack gap={20}>
      <TopBar title="Transfer flow" subtitleBottom="Built with calmo-ui" />
      <Banner
        tone="accent"
        title="Verification complete"
        description="Only the final settlement step remains."
      />
      <Button onClick={sheet.openSheet}>Open settlement sheet</Button>
      <BottomSheet
        open={sheet.open}
        onClose={sheet.closeSheet}
        title="Create payout rule"
        description="Compact, mobile-first secondary flow."
      >
        <Stack gap={12}>
          <TextField label="Destination" placeholder="Treasury reserve" />
          <Button display="block">Continue</Button>
        </Stack>
      </BottomSheet>
      <Result
        tone="success"
        title="Transfer scheduled"
        description="The payout is queued for the next settlement window."
        primaryAction={{ label: "View details" }}
      />
    </Stack>
  );
}
