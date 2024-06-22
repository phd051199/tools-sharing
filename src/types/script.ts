export type Script = {
  id: number;
  createdAt: string;
  path: string;
  name: string;
  user: {
    userName: string;
  };

  scriptContent: string;
};
