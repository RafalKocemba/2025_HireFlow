import { BasicDropdown } from "../../components/ui/BasicDropdown";
import { getInitialFilterOptions } from "../../utils/handleFiltering";
import { useSearchParams } from "react-router";

export function FilterPanel() {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialFilterOptions = getInitialFilterOptions(searchParams);

  function handleChange(value: string) {
    const [filterId, filterValue] = value.split("_");

    if (!filterId) return;

    setSearchParams((prev) => {
      if (!filterValue) {
        prev.delete(filterId);
      } else {
        prev.set(filterId, filterValue);
      }
      return prev;
    });
  }

  return (
    <>
      {initialFilterOptions.map(({ label, values, defaultValue }, index) => (
        <BasicDropdown
          key={index}
          name={label}
          label={label}
          values={values}
          defaultValue={defaultValue}
          onSelect={handleChange}
        />
      ))}
    </>
  );
}
