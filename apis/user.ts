import request from "@/utils/request";
import type { User } from "@/types/apis";

export function login(data : User.Data) {
	return request.post<User.Info>('/login', data);
}