const updateNav = icon => {
  document.querySelector('.active').classList.remove('active');
  icon.classList.add('active');
};

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

export { fetchData, createElement, updateNav };
