export interface UserData {
  uuid: string;
  name: string;
  user_id: string;
  email: string;
  phone?: string | null;
  type?: string | null;
  created_at: string;
  updated_at: string;
}

export interface UserResponse {
  success: boolean;
  message: string;
  data: UserData;
}
