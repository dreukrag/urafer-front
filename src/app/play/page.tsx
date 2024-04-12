import { useCallback } from "react";
import { GoogleOauth } from "../utils/getEnv";

// `app/page.tsx` is the UI for the `/` URL
export default function PlayPage() {
  const onLogin = async (...args: any) => {
    "use server";
    console.log("Google login args: ", args);
  };

  return (
    <div>
      <h1>
        This is the play area. There should be stuff like a command prompt and a
        huge wall of text describing the current location and shit like that
      </h1>

      <div
        id="g_id_onload"
        data-client_id={GoogleOauth}
        data-context="signin"
        data-ux_mode="popup"
        data-callback={onLogin}
        data-itp_support="true"
      ></div>

      <div
        className="g_id_signin"
        data-type="standard"
        data-shape="rectangular"
        data-theme="outline"
        data-text="signin_with"
        data-size="large"
        data-logo_alignment="left"
      ></div>
    </div>
  );
}
