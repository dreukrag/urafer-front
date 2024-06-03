import { signIn } from "../auth";

const signInHandler = async () => {
  "use server";
  await signIn("google", { redirectTo: "/play/setup" });
};

export const SignIn = async () => {
  return (
    <div className="bg-backgroundDark h-16 flex w-auto ml-auto">
      <form
        className="w-fit group flex gap-4 pl-4 pr-4 items-center h-full"
        action={signInHandler}
      >
        <button type="submit">
          <img alt="Sign in with Google" src="/web_dark_rd_SI.svg" />
        </button>
      </form>
    </div>
  );
};
