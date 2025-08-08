export interface ApiResponse<T> {
  data: T;
}

export interface UserDTO {
  id: string;
  email: string;
  name?: string;
}
