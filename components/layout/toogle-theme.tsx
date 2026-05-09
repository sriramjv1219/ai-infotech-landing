import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";
import en from "@/lib/en";

export const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      size="sm"
      variant="ghost"
      className="w-full justify-start"
    >
      <div className="flex gap-2 dark:hidden">
        <Moon className="size-5" />
        <span className="block lg:hidden"> {en.theme.dark} </span>
      </div>

      <div className="dark:flex gap-2 hidden">
        <Sun className="size-5" />
        <span className="block lg:hidden">{en.theme.light}</span>
      </div>
    </Button>
  );
};
