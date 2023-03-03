const fetchData = async url => {
  const request = await fetch(url);
  const data = await request.json();
  return data;
};

const createElement = (element, classes, content) => {
  const newElement = document.createElement(element);
  let classesArray = [];
  classesArray = [...classes];
  if (classesArray.length > 0) newElement.classList.add(...classesArray);
  element !== 'img' ? (newElement.textContent = content) : (newElement.src = content);
  return newElement;
};

export { fetchData, createElement };
