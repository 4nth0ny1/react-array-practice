export const data = [
  { id: 1, name: "Anthony", age: 34 },
  { id: 2, name: "Lauren", age: 24 },
  { id: 3, name: "Andrea", age: 46 },
];

export const getAllData = () => {
  return data;
};

export const sortByAge = () => {
  const sortedArray = [...data].sort(function (a, b) {
    return a.age - b.age;
  });
  return sortedArray;
};

export const sortByName = () => {
  const sortedArray = [...data].sort(function (a, b) {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
    return 0;
  });
  return sortedArray;
};
