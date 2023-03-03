const fetchData = async url => {
  const request = await fetch(url);
  const data = await request.json();
  return data;
};

const createElement = (element, classes, content) => {
  const newElement = document.createElement(element);
  newElement.classList.add(classes);
  element !== 'img' ? (newElement.textContent = content) : (newElement.src = content);
  return newElement;
};

// const createElement2 = (element, content, ...classes) => {
//   const newElement = document.createElement(element);
//   element !== 'img' ? (newElement.textContent = content) : (newElement.src = content);
//   if (classes.length > 0) newElement.classList.add(classes);
//   return newElement;
// };

export { fetchData, createElement };
