import { BasicIcon } from "../../components/ui/BasicIcon";
import { BasicTextarea } from "../../components/ui/BasicTextarea";
import { LOCAL_STORAGE_NOTES_KEY } from "../../constants/constants";
import { handleLocalStorage } from "../../utils/handleLocalStorage";
import { useState } from "react";

const { setLocalItem, getLocalItem } = handleLocalStorage(
  LOCAL_STORAGE_NOTES_KEY,
);
const initialValue = () => {
  const notesStorageData = getLocalItem();

  if (notesStorageData) return notesStorageData;
  return "";
};
export function Notes() {
  const [isOpen, setIsOpen] = useState(false);
  const [notes, setNotes] = useState(initialValue);

  function handleClick() {
    if (isOpen) {
      setLocalItem(notes);
    }
    setIsOpen((prev) => !prev);
  }

  return (
    <aside
      onClick={handleClick}
      className={`fixed right-0 top-1/2 flex h-[75vh] w-[90vw] -translate-y-1/2 transform cursor-pointer flex-col rounded-l-3xl bg-additional-100 py-9 text-sm shadow-notes transition-transform duration-200 md:w-[27.25rem] ${isOpen ? "translate-x-0" : "translate-x-[96%] md:translate-x-[96%] md:hover:translate-x-[90%]"}`}
    >
      <h3 className="mb-6 text-center text-2xl font-extralight italic md:mb-11 md:text-3xl">
        NOTES
      </h3>
      <BasicIcon
        icon="arrow-left"
        iconStyles={`absolute left-0 top-1/2 translate-y-1/2 transition-opacity text-basic-400 ${isOpen ? "opacity-0" : "opacity-1"}`}
      />
      <BasicTextarea
        name="notes"
        onClick={(e) => e.stopPropagation()}
        className="h-full w-full flex-grow"
        inputStyles="bg-additional-100 ml-7 pr-7 italic font-extralight md:ml-12"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
    </aside>
  );
}
