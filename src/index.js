function component() {
    const element = document.createElement('div')

    element.innerHTML = join(['Hello', 'webpack'], ' ')

    // Assume we are in the context of 'window'
    this.alert('Hmmm, this probably isn\'t a great idea...')

    return element
}

document.body.appendChild(component())

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        console.log(
            'We retrieved some data! AND we\'re confident it will work on a variety of browser distributions.'
        )
        console.log(json)
    })
    .catch(err => console.error('Something went wrong when fetching this data: ', err))