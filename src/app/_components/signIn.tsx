import { signIn, signOut, auth } from "../auth";
import clientPromise from "../db";

const signOutHandler = async () => {
  "use server";
  await signOut({ redirectTo: "/" });
};

const signInHandler = async () => {
  "use server";
  await signIn("google", { redirectTo: "/play/setup" });
};

export const SignIn = async () => {
  const session = await auth();

  let content;

  if (session?.user) {
    try {
      const client = await clientPromise;
      const db = client.db("uranium_fever_db");
      const coll = db.collection("uf_sessions");

      await coll.insertOne({ sessionUser: session });
    } catch (err) {
      console.log("Error :C ", err);
    }

    content = (
      <form action={signOutHandler}>
        <button
          className="group w-fit flex gap-4 pl-4 pr-4 items-center h-full"
          type="submit"
        >
          <div className="flex flex-col gap-0.5 items-baseline">
            <p className="text-textPrimary text-base font-bold group-hover:underline">
              User Name here
            </p>
            <p className="text-textPrimary text-sm group-hover:underline">
              User character here
            </p>
          </div>
          <div className="rounded-full bg-textPrimary w-12 h-12 flex justify-center items-center">
            <span>UN</span>
          </div>
        </button>
      </form>
    );
  } else {
    content = (
      <form
        className="w-fit group flex gap-4 pl-4 pr-4 items-center h-full"
        action={signInHandler}
      >
        <button type="submit">
          <img alt="Sign in with Google" src="/web_dark_rd_SI.svg" />
        </button>
      </form>
    );
  }

  return (
    <div className="bg-backgroundDark h-16 flex w-auto ml-auto">{content}</div>
  );
};
