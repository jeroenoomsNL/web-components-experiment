import { LitElement, html, property, customElement, css } from 'lit-element';
import { BreweryItem } from './types';

@customElement('brewery-card')
export class BreweryCard extends LitElement {
  @property() brewery: BreweryItem;

  static get styles() {
    return css`
      .card {
        display: flex;
        flex-direction: column;
        font-family: monospace;
        min-height: 120px;
        border: 1px solid #eee;
        padding: 4px;
        color: #333;
      }
      .shadow {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
      }
      .shadow:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      }
      .name {
        font-size: 14px;
        font-weight: 700;
      }
      .city {
        font-size: 14px;
        margin: 2px;
      }
      .street {
        font-size: 12px;
        margin: 2px;
      }
      .phone {
        font-size: 12px;
        align-self: center;
        color: #333;
        text-decoration: none;
        background: #ddd;
        border-radius: 10px;
        padding: 4px;
        margin: 4px;
      }
    `;
  }

  protected render() {
    const { state, city, name, phone, street } = this.brewery;
    return html`
      <div class="card shadow">
        <p class="name">${name}</p>
        <p class="city">${state}, ${city}</p>
        <p class="street">${street}</p>
        ${phone && html`<a class="phone" href="tel:${phone}">+1${phone}</a>`}
      </div>
    `;
  }
}
