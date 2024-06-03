import { DefaultButton } from "@/app/_components/buttons";
import { dbCharacter } from "@/types/Character";
import { PlayIcon, TrashIcon } from "@heroicons/react/16/solid";

type iCharacterCard = Pick<dbCharacter, "name" | "level">;

export const CharacterCard = ({ name, level }: iCharacterCard) => {
  return (
    <div className="w-full h-16 rounded-lg bg-backgroundSecondary flex gap-4 px-4 items-center">
      <div className="flex gap-4 items-center mr-auto">
        <p className="text-textPrimary text-2xl font-extrabold ">{name}</p>
        <p className="text-textPrimary text-lg font-extrabold">
          Character_Class | {level}
        </p>
      </div>
      <div className="flex gap-4">
        <DefaultButton>
          <PlayIcon className="size-6" />
        </DefaultButton>
        <DefaultButton>
          <TrashIcon className="size-6" />
        </DefaultButton>
      </div>
    </div>
  );
};
