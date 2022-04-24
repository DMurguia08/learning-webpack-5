import { join } from 'lodash'

function getComponent() {
    const element = document.createElement('div')
    const button = document.createElement('button')
    const br = document.createElement('br')

    button.innerHTML = 'Click me and look at the console!'
    element.innerHTML = join(['Hello', 'webpack'], ' ')
    element.append(br, button)

    // Note that because the network request is involved, some indication
    // of loading would need to be shown in the production-level site/app.
    button.onclick = () => import(/* webpackChunkName: "print" */ './print.js').then(module => {
        const print = module.default

        print()
    })

    return element
}

document.body.appendChild(getComponent())