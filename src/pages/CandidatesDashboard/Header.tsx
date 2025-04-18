import { Clock } from "../../components/Clock";
import { Logo } from "../../components/Logo";
import { Search } from "./Search";

export function Header() {
  return (
    <header className="my-10 flex flex-col items-center gap-6 md:flex-row md:justify-between md:gap-4">
      <Logo />
      <Search />
      <Clock className="hidden md:block" />
    </header>
  );
}
