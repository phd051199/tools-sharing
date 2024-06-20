export type Script = {
  id: number;
  createdAt: string;
  path: string;
};

export const apiGetScripts = useApi<Script[]>('/script');

export const apiGetScript = (id: number) =>
  useApi<{
    fileUrl: string;
    bundleUrl: string;
  }>(`/script/${id}`);
