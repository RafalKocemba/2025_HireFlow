import { BasicDropdown } from "../../components/ui/BasicDropdown";
import { SORT_OPTIONS } from "../../utils/handleSorting";
import { useSearchParams } from "react-router";

export function SortPanel() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortParam = searchParams.get("sort") ?? "";

  function handleSortChange(value: string) {
    setSearchParams((prev) => {
      if (!value) {
        prev.delete("sort");
      } else {
        prev.set("sort", value);
      }
      return prev;
    });
  }

  return (
    <BasicDropdown
      name="Sort"
      label="Sort"
      values={SORT_OPTIONS}
      defaultValue={sortParam}
      onSelect={handleSortChange}
    />
  );
}
