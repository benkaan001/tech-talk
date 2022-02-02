const inputList = document.getElementById('input');
new URLSearchParams(window.location.search).forEach((value, name) => {
  // name must match the name in the input value in the form
  inputList.append(`${name}: ${value}`);
  inputList.append(document.createElement('br'));
});
