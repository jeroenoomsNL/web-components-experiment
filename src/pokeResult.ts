import { LitElement, html, css, property } from 'lit-element';
import { Pokemon } from './types';

class PokeResult extends LitElement {
  pokemon: Pokemon;

  static get properties() {
    return {
      pokemon: { type: Object },
    };
  }

  render() {
    if(!this.pokemon) return;
    return html`
      <div>
        <h1>${this.pokemon.name}</h1>
        <img src="${this.pokemon.sprites.front_default}" alt="${this.pokemon.name}" />
      </div>
    `;
  }
}

customElements.define('poke-result', PokeResult);
