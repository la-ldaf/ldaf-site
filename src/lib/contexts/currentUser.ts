export type CurrentUser = {
  email: string;
  name: string;
  avatarURL: string;
};

export const key = Symbol("currentUser");
