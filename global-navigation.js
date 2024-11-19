const template = document.createElement('header')
template.className = 'PageHeader'
template.innerHTML = `
<div class="PageHeader__lefthand">
        <!-- Logo -->
        <img
                alt="Web Foundations logo"
                src="./assets/images/logo.png"
                width="40"
        />

        <h1>Web Foundations</h1>
</div>

<!-- Global Navigation -->
<nav class="PageHeader__righthand">
        <ul>
                <li class="capitalize"><a href="#ProgrammingConcepts">programming concepts</a></li>
                <li class="capitalize"><a href="#Frontend">frontend</a></li>
                <li class="capitalize"><a href="#Backend">backend</a></li>
                <li class="capitalize"><a href="#About">about</a></li>
        </ul>
</nav>
`

class GlobalNavigationComponent extends HTMLElement {
        constructor () {
                super()

                this.render()
        }

        // Fires when an instance was inserted into the document
        connectedCallback () {}

        // Fires when an instance was removed from the document
        disconnectedCallback () {}

        // Fires when an attribute was added, removed, or updated
        attributeChangedCallback (attrName, oldVal, newVal) {}

        // Fires when an element is moved to a new document
        adoptedCallback () {}

        render () {
                console.dir(template)
                this.innerHTML = template.outerHTML
        }
}

window.customElements.define('global-navigation', GlobalNavigationComponent)
