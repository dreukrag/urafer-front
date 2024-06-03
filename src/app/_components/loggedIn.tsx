import { atom, useAtom } from "jotai";
import { signOut, auth } from "../auth";

const signOutHandler = async () => {
  "use server";
  await signOut({ redirectTo: "/" });
};

export const LoggedIn = async () => {
  const session = await auth();

  if (session?.user === undefined) {
    console.error("Somehow tried to render signed in component without a user");
    signOutHandler();
    return null;
  }

  const initials = session.user.name?.split(" ");
  let user_initials = "";

  if (initials.length > 1) {
    user_initials = `${initials[0][0]}${initials[1][0]}`;
  }else{
    user_initials = `${initials[0][0]}`;

  }

  return (
    <div className="bg-backgroundDark h-16 flex w-auto ml-auto">
      <form action={signOutHandler}>
        <button
          className="group w-fit flex gap-4 pl-4 pr-4 items-center h-full"
          type="submit"
        >
          <div className="flex flex-col gap-0.5 items-baseline">
            <p className="text-textPrimary text-base font-bold group-hover:underline">
              {session.user.name}
            </p>
            <p className="text-textPrimary text-sm group-hover:underline">
              User character here
            </p>
          </div>
          <div className="rounded-full bg-textPrimary w-12 h-12 flex justify-center items-center">
            <span>{user_initials}</span>
          </div>
        </button>
      </form>
    </div>
  );
};
