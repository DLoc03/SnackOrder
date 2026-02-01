import authApiRequest from "@/apiRequest/auth";
import { ERRORS_STATUS } from "@/constants/error-status";
import { HttpError } from "@/lib/http";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const cookieStore = cookies();
  const sessionToken = (await cookieStore).get("sessionToken");
  if (!sessionToken) {
    return Response.json(
      { message: "Không nhận được token" },
      {
        status: ERRORS_STATUS.UNAUTHORIZED,
      },
    );
  }
  try {
    const res = await authApiRequest.logoutFromNextServer(sessionToken.value);
    return Response.json(res.payload, {
      status: ERRORS_STATUS.SUCCESS,
      headers: {
        // Xoá cookies sessionToken
        "Set-Cookie": "sessionToken=; Path=/; HttpOnly; Max-Age=0",
      },
    });
  } catch (err: any) {
    if (err instanceof HttpError) {
      return Response.json(err.payload, {
        status: err.status,
      });
    } else {
      return Response.json(
        {
          message: "Lỗi không xác định",
        },
        {
          status: ERRORS_STATUS.INTERNAL_SERVER,
        },
      );
    }
  }
}
