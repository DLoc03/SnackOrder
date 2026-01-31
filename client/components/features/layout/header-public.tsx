import { ModeToggle } from "../../toggle-mode";
import Link from "next/link";
import { Button } from "../../ui/button";
import { PATHSNAME } from "@/constants/paths-name";

function HeaderPublic() {
  return (
    <header className="w-full fixed top-0 left-0 flex px-4 py-3 border-b  z-50 items-center justify-between">
      <Link
        href={"/"}
        className="text-xl sm:text-4xl cursor-pointer text-shadow-2xs font-bold"
      >
        Snack Order
      </Link>

      <div className="flex gap-x-2 items-center">
        <ModeToggle />
        <Link href={PATHSNAME.LOGIN}>
          <Button variant={"default"} size={"sm"}>
            Đăng nhập
          </Button>
        </Link>
        <Link href={PATHSNAME.REGISTER}>
          <Button variant={"outline"} size={"sm"}>
            Đăng ký
          </Button>
        </Link>
      </div>
    </header>
  );
}

export default HeaderPublic;
