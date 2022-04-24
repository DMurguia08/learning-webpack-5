import _ from 'lodash'

import printMe from './print'

console.log(process.env.NODE_ENV)
//* According to documentation, this variable `process.env.NODE_ENV`
//* is not going to work properly within Webpack scripts

function component() {
    const element = document.createElement('div')
    const btn = document.createElement('button')

    element.innerHTML = _.join(['Hello', 'webpack'], ' ')

    btn.innerHTML = 'Click me and check the console!'
    btn.onclick = printMe

    element.appendChild(btn)

    return element
}

document.body.appendChild(component())