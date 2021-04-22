function checkForUrl(inputText) {
    console.log("::: Running checkForUrl :::", inputText);

    let exp = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gi;

    return exp.test(inputText);
}

export { checkForUrl }