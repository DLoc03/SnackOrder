import envConfig from "@/config";
import { cookies } from "next/headers";

async function Profile() {
  const cookieStore = cookies();
  const sessionToken = (await cookieStore).get("sessionToken");

  const result = await fetch(`${envConfig.NEXT_PUBLIC_API_URL}/account/me`, {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${sessionToken?.value}`,
    },
  }).then(async (res) => {
    const payload = await res.json();
    const data = {
      status: res?.status,
      payload,
    };
    if (!res?.ok) {
      throw data;
    }
    return data;
  });

  return (
    <div>
      <h1>Hồ sơ</h1>
      <div>Xin chào {result.payload?.data?.name}</div>
    </div>
  );
}

export default Profile;
