import { DefaultButton } from "@/app/_components/buttons";
import { CharacterCard } from "./characterCard";
import { UserPlusIcon } from "@heroicons/react/16/solid";
import { addNewCharacter, getCharacterList } from "../actions";

export const CharacterList = async () => {
  const characterList = await getCharacterList();

  return (
    <>
      {characterList.data.map(({ name, level, _id }) => (
        <CharacterCard key={_id.toString()} {...{ name, level }} />
      ))}
      <form action={addNewCharacter}>
        <DefaultButton>
          <UserPlusIcon className="size-6" />
          Create new character
        </DefaultButton>
      </form>
    </>
  );
};
