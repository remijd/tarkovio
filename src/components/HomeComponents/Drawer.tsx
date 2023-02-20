import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import Account from "@/page-components/Account";
type Anchor = "Profile";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    Profile: false,
  });
  const session = useSession();
  const supabase = useSupabaseClient();
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "Profile" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
    >
      <div className="container" style={{ padding: "50px 0 100px 0" }}>
        {!session ? (
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            theme="dark"
          />
        ) : (
          <Account session={session} />
        )}
      </div>
    </Box>
  );

  return (
    <div>
      {(["Profile"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={"top"}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <div style={{ padding: "0rem 200px 0rem 200px" }}>
              {list(anchor)}
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
