const countries = [
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
  ];
  
  for (let countrie of countries) {
    const div$$ = document.createElement("div");
    document.body.appendChild(div$$);
    
    for (let property in countrie) {
      const h4$$ = document.createElement("h4");
      h4$$.textContent = property.title;
      div$$.appendChild(h4$$);
    }
  }


  const btn$$ = document.querySelector('button');
  btn$$.addEventListener("click", removeLastItem);

  function removeLastItem(){
    for(let countrie of countries){
        countries.pop()
      }
  }
  

