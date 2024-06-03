import { DefaultButton } from "@/app/_components/buttons";
import { CharacterList } from "./_components/characterList";
import { Suspense } from "react";

// `app/page.tsx` is the UI for the `/play/setup` URL
export default async function SetupPage() {
  // console.log("characterList: ", characterList);
  return (
    <section className="grid grid-cols-setup h-full-minus-navbar">
      <div className="flex flex-col gap-2 p-8 justify-start content-stretch items-start bg-backgroundSecondary h-full">
        <div className="w-full">
          <h2 className="text-textPrimaryDesaturated font-extrabold text-xl">
            ACCOUNT
          </h2>
          <div className="h-1.5 bg-textPrimaryDesaturated w-full" />
        </div>
        <label className="text-textPrimary">Account name</label>
        <input className="border-b-4 rounded-sm bg-backgroundSecondary border-background focus:border-backgroundDarkSecondary focus:outline focus:outline-offset-2 focus:outline-backgroundDarkSecondary focus:outline-2 w-full"></input>
        <label className="text-textPrimary">Account e-mail</label>
        <input className="border-b-4 rounded-sm bg-backgroundSecondary border-background focus:border-backgroundDarkSecondary focus:outline focus:outline-offset-2 focus:outline-backgroundDarkSecondary focus:outline-2 w-full"></input>
        <DefaultButton>Save Changes</DefaultButton>
      </div>
      <div className="flex flex-col gap-2 p-8 justify-start content-stretch items-start">
      <Suspense fallback={<p>Loading characters!...</p>}>
        <CharacterList />
      </Suspense>
      </div>
    </section>
  );
}
