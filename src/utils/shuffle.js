export function shuffle(array) {
  const newArr = [...array];

  console.log("Before : ", newArr);
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  console.log("After: ", newArr);
  return newArr;
}
