class LocalStorageManipular {
  static ArrayTweet = [];

  static AgregarTweetLocalStorage(ContenidoTweet) {
    this.ArrayTweet = this.ObtenerLocalStorage();
    this.ArrayTweet.push(ContenidoTweet);

    // console.log(this.ArrayTweet);
    localStorage.setItem("tweets", JSON.stringify(this.ArrayTweet));
  }

  static ObtenerLocalStorage() {
    let tweetObtenidosLS = [];

    if (localStorage.getItem("tweets") == null) {
      return tweetObtenidosLS;
    }

    return JSON.parse(localStorage.getItem("tweets"));
  }

  static EliminarTweetLocalStorage(contenido) {
    let tweetLS = this.ObtenerLocalStorage();
    let arrayNuevoTweetLS = [];

    for (let i = 0; i < tweetLS.length; i++) {
      if (contenido !== tweetLS[i]) {
        arrayNuevoTweetLS.push(tweetLS[i]);
      }
    }
    localStorage.setItem("tweets", JSON.stringify(arrayNuevoTweetLS));
  }
}
