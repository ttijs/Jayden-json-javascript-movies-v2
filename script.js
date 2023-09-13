fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    //console.log(data);

    data.mijnFilmCollectie.forEach(function (item, index) {
      // // of met arrow functie
      // data.mijnFilmCollectie.forEach((item, index) =>
      //   console.log(item, index)
      // );

      //console.log("de tekst van item met index " + index + " is: " + item.text);

      //const node = document.getElementById("bright");
      const node = document.getElementsByClassName("template")[0];
      //console.log(node)

      const clone = node.cloneNode(true);
      // id aanpassen, anders is die hetzelfde als die van het origineel
      clone.id = "card" + item.id;
      // class template verwijderen. Die staat op display none
      clone.classList.remove("template");

      const text = clone.querySelector("#text");
      text.innerHTML = item.text;
      const image = clone.querySelector("#image");
      //    image.innerHTML = item.image;
      //image.src = item.image.image;
      clone.querySelector(".blur_back").style.backgroundImage =
        "url('" + item.image.image + "')";

      const name = clone.querySelector("#name");
      name.innerHTML = item.name;
      const author = clone.querySelector("#author");
      author.innerHTML = item.author;
      const minutes = clone.querySelector("#minutes");
      minutes.innerHTML = item.minutes;
      const type = clone.querySelector("#type");
      type.innerHTML = item.type.join(", ");

      // to doe:
      // nog iets met lettertypes: in json, en uit css

      document.getElementById("moviecards").appendChild(clone);
    });

    // const text = document.getElementById("text")
    // text.innerHTML = data.mijnFilmCollectie[0].text;
    // const image = document.getElementById("image")
    // image.innerHTML = data.mijnFilmCollectie[0].image;
    // const name = document.getElementById("name")
    // name.innerHTML = data.mijnFilmCollectie[0].name;
    // const author = document.getElementById("author")
    // author.innerHTML= data.mijnFilmCollectie[0].author
    // const minutes = document.getElementById("minutes")
    // minutes.innerHTML= data.mijnFilmCollectie[0].minutes
    // const type = document.getElementById("type")
    // type.innerHTML= data.mijnFilmCollectie[0].type
    // const text2 = document.getElementById("text2")
    // text2.innerHTML = data.mijnFilmCollectie[1].text2;
    // const name2 = document.getElementById("name2")
    // name2.innerHTML = data.mijnFilmCollectie[1].name2
    // const author2 = document.getElementById("author2")
    // author2.innerHTML= data.mijnFilmCollectie[1].author2
    // const minutes2 = document.getElementById("minutes2")
    // minutes2.innerHTML= data.mijnFilmCollectie[1].minutes2
    // const text3 = document.getElementById("text3")
    // text3.innerHTML = data.mijnFilmCollectie[2].text3;
    // const name3 = document.getElementById("name3")
    // name3.innerHTML = data.mijnFilmCollectie[2].name3
    // const author3 = document.getElementById("author3")
    // author3.innerHTML= data.mijnFilmCollectie[2].author3
    // const minutes3 = document.getElementById("minutes3")
    // minutes3.innerHTML= data.mijnFilmCollectie[2].minutes3
    // const text4 = document.getElementById("text4")
    // text4.innerHTML = data.mijnFilmCollectie[3].text4;
    // const name4 = document.getElementById("name4")
    // name4.innerHTML = data.mijnFilmCollectie[3].name4
    // const author4 = document.getElementById("author4")
    // author4.innerHTML= data.mijnFilmCollectie[3].author4
    // const minutes4 = document.getElementById("minutes4")
    // minutes4.innerHTML= data.mijnFilmCollectie[3].minutes4
    // const text5 = document.getElementById("text5")
    // text5.innerHTML = data.mijnFilmCollectie[4].text5;
    // const name5 = document.getElementById("name5")
    // name5.innerHTML = data.mijnFilmCollectie[4].name5
    // const author5 = document.getElementById("author5")
    // author5.innerHTML= data.mijnFilmCollectie[4].author5
    // const minutes5 = document.getElementById("minutes5")
    // minutes5.innerHTML= data.mijnFilmCollectie[4].minutes5
  });
