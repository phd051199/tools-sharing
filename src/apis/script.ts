export const apiGetScripts = useApi<
  Array<{
    id: number;
    createdAt: string;
    path: string;
  }>
>('https://api.duyph.xyz/script', 'get');
