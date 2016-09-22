const arrayToQuery = (elements, query) => elements.map((element) => query + "[]=" + element).join("&");

export { arrayToQuery };
