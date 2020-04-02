const contenidoTweet = document.querySelector("#txTweet");
const listaTweets = document.querySelector("#lista-tweets");
eventListener();
CargarTweetsLocalStorage();

function eventListener() {
  document
    .querySelector("#formulario")
    .addEventListener("submit", ObtenerFormulario);
  listaTweets.addEventListener("click", EliminarTweet);
}

function ObtenerFormulario() {
  event.preventDefault();

  //   quita los espacios del inicio y final de una cadena de texto
  if (contenidoTweet.value.trim() == "") return;

  const InstanciaTweet = new Tweets(contenidoTweet.value);
  InstanciaTweet.AgregarTweetDOM(listaTweets, true);
  //   console.log(event);
  //   console.log(contenidoTweet.value);
  contenidoTweet.value = "";
}

function EliminarTweet(event) {
  //   //   console.log("tweet eliminado");
  //   //   console.log(event.target);
  //   if (event.target.tagName !== "SPAN") return;
  //   //   console.log("Span Presionado");
  //   event.target.parentElement.parentElement.remove();
  Tweets.EliminarTweetDom(event);
}

function CargarTweetsLocalStorage() {
  const TweetLS = LocalStorageManipular.ObtenerLocalStorage();
  // console.log(TweetLS);

  for (let i = 0; i < TweetLS.length; i++) {
    // console.log("imprimir");
    const InstanciaTweet = new Tweets(TweetLS[i]);
    InstanciaTweet.AgregarTweetDOM(listaTweets, false);
  }
}
