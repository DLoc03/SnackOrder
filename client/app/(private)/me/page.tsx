import accountApiRequest from "@/apiRequest/account";
import { cookies } from "next/headers";

async function Profile() {
  const cookieStore = cookies();
  const sessionToken = (await cookieStore).get("sessionToken");

  const result = await accountApiRequest.me(sessionToken?.value ?? "");
  return (
    <div>
      <div>Xin chào {result.payload?.data?.name}</div>
    </div>
  );
}

export default Profile;
