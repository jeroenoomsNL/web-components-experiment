import { LitElement, html, css, property } from 'lit-element';
import "./pokeSearch";
import "./pokeResult";
import {Pokemon} from "./types";


class Pokedex extends LitElement {
    pokemon : Pokemon;
    static get properties() {
        return {
          pokemon: { type: Object },
        };
      }

    _pokeresult(e: any){
        this.pokemon = e.detail.result;
    }

    render() {
        return html`
            <h1>Gotta Catch them All!</h1>
            <poke-search @pokeresult=${this._pokeresult}></poke-search>
            <poke-result .pokemon=${this.pokemon}></poke-list>
        `
    }
}

customElements.define("poke-dex", Pokedex);