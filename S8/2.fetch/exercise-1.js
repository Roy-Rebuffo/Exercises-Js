fetch("https://api.agify.io?name=michael")
  .then((response) => response.json())
  .then((res) => console.log(res));