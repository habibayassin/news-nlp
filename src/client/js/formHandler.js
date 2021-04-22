function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formInput = document.getElementById('name').value
    let status = document.getElementById('results')

    console.log(formInput);

    if(Client.checkForUrl(formInput)){

        console.log("::: Form Submitted :::")
        status.innerHTML = 'Loading............';

        fetch(`http://localhost:8081/analysis?url=${formInput}`)
        .then(res => res.json())
        .then(function(res) {
            console.log(res)
            status.innerHTML = JSON.stringify(res)
        })

    }else{
        status.innerHTML = 'Invalid URL';
        alert('Invalid URL');
    }
}

export { handleSubmit }
