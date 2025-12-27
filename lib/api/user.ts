import { UserResponse } from "@/types/user";
import { httpClient } from "@/lib/httpClient";

export const userApi = {
  info: () => httpClient<UserResponse>("/users/info"),
};
