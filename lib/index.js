// TODO: Autocomplete the input with AJAX calls.
const teamNum = {
  austria: 8,
  belgium: 13,
  croatia: 56370,
  czech: 58837,
  denmark: 35,
  england: 39,
  finland: 42,
  france: 43,
  germany: 47,
  hungary: 57,
  italy: 66,
  netherlands: 95,
  north: 59205,
  poland: 109,
  portugal: 110,
  russia: 57451,
  scotland: 117,
  slovakia: 58836,
  spain: 122,
  sweden: 127,
  switzerland: 128,
  turkey: 135,
  ukraine: 57166,
  wales: 144,
};

const input = document.querySelector("#search");
const results = document.querySelector("#results");

const populateList = (data) => {
  results.innerHTML = "";
  const words = data.words;
  words.forEach((suggestion) => {
    results.insertAdjacentHTML('beforeend',
      `
      <a href="https://www.uefa.com/uefaeuro-2020/teams/${teamNum[suggestion]}--${suggestion}/" target= "_blank">
      <li class="list-group-item">${suggestion}</li></a>
      `);
  });
};

const suggestionGetter = (event) => {
  event.preventDefault();
  const url = `https://wagon-dictionary.herokuapp.com/autocomplete/${input.value}`;
  fetch(url)
    .then(response => response.json())
    .then(data => populateList(data));
};
input.addEventListener("keyup", suggestionGetter);
