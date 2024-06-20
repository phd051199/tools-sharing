export const partitionWithIndex = <T>(
  array: T[] | null | undefined,
  predicate: (element: T, index: number) => boolean
): [T[], T[]] => {
  if (!array) {
    return [[], []];
  }

  const truthy: T[] = [];
  const falsy: T[] = [];

  array.forEach((element, index) => {
    if (predicate(element, index)) {
      truthy.push(element);
    } else {
      falsy.push(element);
    }
  });

  return [truthy, falsy];
};
