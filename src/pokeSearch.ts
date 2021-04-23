import { LitElement, html, css, property } from 'lit-element';

class PokeSearch extends LitElement {
  _search(searchInput: string) {
      debugger
    fetch(`http://pokeapi.co/api/v2/pokemon/${searchInput}`)
    .then((res)=> res.json())
    .then((res)=> {
        this.dispatchEvent(
            new CustomEvent("pokeresult", {detail: {result: res}})
        );
    })
    .catch((err)=> {
        debugger
    })

  }

  render() {
    return html`
      <h3>Favorite pokemon</h3>
      <input type="text" @change=${(e: any) => this._search(e.target.value)} />
    `;
  }
}

customElements.define('poke-search', PokeSearch);
