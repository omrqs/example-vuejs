class CoreHelper {
  static toArrayQueryString(params) {
    let query = Object.keys(params)
      .map(function(key) {
        return encodeURIComponent(key) + "=" + encodeURIComponent(params[key]);
      })
      .join("&");

    return String(query);
  }
}

export default CoreHelper;
