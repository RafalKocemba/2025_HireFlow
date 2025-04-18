import { BasicInput } from "../../components/ui/BasicInput";
import { useSearchParams } from "react-router";

export function Search() {
  const [searchParams, setSearchParams] = useSearchParams({ q: "" });
  const searchQuery = searchParams.get("q") ?? "";

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;

    if (value && !value.trim()) return;

    setSearchParams(
      (prev) => {
        prev.set("q", value);
        return prev;
      },
      { replace: true },
    );
  }

  return (
    <BasicInput
      name="search-candidates"
      value={searchQuery}
      onChange={handleSearchChange}
      className="w-full max-w-xl overflow-hidden rounded-[3.56rem] border border-basic-900 pl-4 text-base font-extralight md:text-2xl"
      placeholder="Find your perfect candidate..."
      limit={50}
      variant="search"
      icon="search-thin"
    />
  );
}
