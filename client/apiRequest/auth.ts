import http from "@/lib/http";
import {
  LoginBodyType,
  LoginResType,
  RegisterBodyType,
  RegisterResType,
} from "@/schemaValidations copy/auth.schema";
import { MessageResType } from "@/schemaValidations copy/common.schema";

const authApiRequest = {
  login: (body: LoginBodyType) => http.post<LoginResType>("/auth/login", body),
  register: (body: RegisterBodyType) =>
    http.post<RegisterResType>("/auth/register", body),
  auth: (body: { sessionToken: string }) =>
    http.post("/api/auth", body, {
      baseUrl: "",
    }),
  logoutFromNextServer: (sessionToken: string) =>
    http.post<MessageResType>(
      "/auth/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${sessionToken}`,
        },
      },
    ),
  logoutFromNextClient: () =>
    http.post<MessageResType>(
      "/api/auth/logout",
      {},
      {
        baseUrl: "",
      },
    ),
};

export default authApiRequest;
