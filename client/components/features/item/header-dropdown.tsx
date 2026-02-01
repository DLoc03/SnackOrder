import UserPhoto from "../user/user-photo";
import { Button } from "@/components/ui/button";
import { LogOut, MoveRight } from "lucide-react";
import Link from "next/link";
import { PATHSNAME } from "@/constants/paths-name";
import authApiRequest from "@/apiRequest/auth";
import { toast } from "sonner";
import { logout } from "@/actions/logout";
import { useRouter } from "next/navigation";
import { handleErrorApi } from "@/lib/utils";

type User = {
  name: string;
};

type DropdownProps = {
  user: User | null;
};

function HeaderDropdown({ user }: DropdownProps) {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await authApiRequest.logoutFromNextClient();
      toast.info("Đã đăng xuất khỏi tài khoản", { position: "bottom-right" });
      router.push(PATHSNAME.LOGIN);
    } catch (err: any) {
      handleErrorApi({ error: err });
    }
  };
  return (
    <div className="h-full w-full">
      <div className="flex flex-col items-center py-2 border-b space-y-1">
        <UserPhoto />
        <span className="font-semibold text-foreground">{user?.name}</span>
      </div>
      <Link href={PATHSNAME.ME} className="w-full">
        <Button
          variant={null}
          className="w-full justify-between cursor-pointer"
        >
          Hồ sơ
          <MoveRight />
        </Button>
      </Link>
      <Button
        variant={null}
        className="w-full justify-between cursor-pointer"
        onClick={handleLogout}
      >
        Đăng xuất <LogOut />
      </Button>
    </div>
  );
}

export default HeaderDropdown;
