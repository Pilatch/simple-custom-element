class RedButton extends HTMLElement {
  connectedCallback() {
    let shadowRoot = this.attachShadow({
      mode: 'open'
    });
    shadowRoot.innerHTML = `
  <button><slot>Never click this button!</slot></button>
<style>
  red-button button {
    background-color: red;
    border: 0;
    box-shadow: 2px 2px 2px gray;
    color: white;
    font-size: 1.5em;
  }

  red-button.pushed button {
    background-color: orange;
    color: black;
    font-weight: bold;
    font-size: 2.5em;
    padding: 1em;
  }
</style>`;
    this.querySelector('button').addEventListener('click', event => {
      this.classList.add('pushed');
      this.querySelector('slot').textContent = 'BOOM!';
    });
  }

}

customElements.define('red-button', RedButton);