import "calmo-ui/tokens.css";
import "calmo-ui/styles.css";
import {
  BottomInfo,
  Button,
  Card,
  Select,
  Stack,
  Switch,
  TextField,
  TopBar,
} from "calmo-ui";

export default function App() {
  return (
    <Stack gap={20}>
      <TopBar title="Settings" subtitleBottom="Built with calmo-ui" />
      <Card>
        <Stack gap={16}>
          <TextField label="Workspace name" defaultValue="Calmo Labs" />
          <TextField label="Billing email" defaultValue="team@calmo-ui.dev" />
          <Select label="Region" defaultValue="de">
            <option value="de">Germany</option>
            <option value="uk">United Kingdom</option>
            <option value="us">United States</option>
          </Select>
          <Switch label="Email notifications" defaultChecked />
          <Button>Save changes</Button>
          <BottomInfo title="Saved instantly" description="Use confirmation only for destructive actions." />
        </Stack>
      </Card>
    </Stack>
  );
}

