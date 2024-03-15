//Get From Local Storage
const getStorage = () => {
  //Course Stored
  let courseStored = window.localStorage.getItem("course");
  courseStored
    ? (courseStored = JSON.parse(courseStored))
    : (courseStored = []);

  //Total Hour Stored
  let creditStored = window.localStorage.getItem("credit");
  if (!creditStored) creditStored = 0;

  //Total Price Stored
  let priceStored = window.localStorage.getItem("price");
  if (!priceStored) priceStored = 0;

  return [courseStored, creditStored, priceStored];
};

//Save In Local Storage
const saveStorage = (courseStored, creditStored, priceStored) => {
  window.localStorage.setItem("course", JSON.stringify(courseStored));
  window.localStorage.setItem("credit", creditStored);
  window.localStorage.setItem("price", priceStored);
};

//Set In Local Storage
const setStorage = (obj, credit, price) => {
  let [courseStored, creditStored, priceStored] = getStorage();

  courseStored.push(obj);
  creditStored = credit;
  priceStored = price;

  saveStorage(courseStored, creditStored, priceStored);
};

//Clear Local Storage
const clearStorage = () => {
  window.localStorage.clear();
};

//Remove From Local Storage
const removeStorage = (id, credit, price) => {
  let [courseStored, creditStored, priceStored] = getStorage();

  let remainingCourse = courseStored.filter((course) => course.id !== id);
  creditStored = credit;
  priceStored = price;

  saveStorage(remainingCourse, creditStored, priceStored);
};

export { setStorage, clearStorage, removeStorage };
