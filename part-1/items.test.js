const items = ["b", "c", "d"]

test("Push returns the new length of the array correctly", () => {
  const items = [...items]
  expect(items.push("e")).toEqual(4)
  expect(items).toEqual(["b", "c", "d", "e"])
});

test("Unshift returns the new length of the array correctly", () => {
  const items = [...items]
  expect(items.unshift("a")).toEqual(4)
  expect(items).toEqual(["a", "b", "c", "d"])
});

const mapToEmptyArray = () => {
  return [...[1], ...[2]]
}

test("Spodziewamy sie.. ", ()=>{
  const i = items
  expect(mapToEmptyArray(i)).toEqual([])
});