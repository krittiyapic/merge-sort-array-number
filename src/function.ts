export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[],
): number[] {
  const mergedCollection = [...collection_1, ...collection_2, ...collection_3];
  
  for (let i = 0; i < mergedCollection.length; i++) {
    for (let j = i + 1; j < mergedCollection.length; j++) {
      if (mergedCollection[i] > mergedCollection[j]) {
        const temp = mergedCollection[i];
        mergedCollection[i] = mergedCollection[j];
        mergedCollection[j] = temp;
      }
    }
  }

  return mergedCollection;
}
