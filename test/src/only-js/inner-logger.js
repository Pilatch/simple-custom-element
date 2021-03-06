class InnerLogger extends HTMLElement {
  constructor() {
    super()
    console.log(this.innerHTML)
  }

  connectedCallback() {
    Object.assign(this.style, {
      fontFamily: `"Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace`,
      color: 'green',
      fontSize: '2em',
      fontWeight: 'bold',
    })

    this.addEventListener('click', event => {
      console.log('click event!', event)
    })
  }
}
