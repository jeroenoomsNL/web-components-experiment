import { customElement, LitElement, html, css, property } from 'lit-element';
import { BreweryItem } from './types';
import './BreweryCard';
import './CityInput';

@customElement('breweries-element')
export class Breweries extends LitElement {
  static get styles() {
    return css`
      .container {
        background: white;
        border: 1px solid #eee;
        width: 100vw;
      }
      .breweries {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        align-items: flex-start;
        gap: 20px;
      }
    `;
  }

  @property({ type: Array }) breweries: BreweryItem[] = [];

  private city: string;

  async fetchBreweries() {
    const response = await fetch(
      `https://api.openbrewerydb.org/breweries?by_city=${this.city}`
    );
    const jsonResponse = await response.json();
    this.breweries = jsonResponse;
  }

  private updateCity(city: string) {
    if (this.city !== city) {
      this.city = city;
      this.fetchBreweries();
    }
  }

  private onCityChanged = (event: CustomEvent) => {
    this.updateCity(event.detail);
  };

  render() {
    return html`
      <div class="container">
        <p>Looking for a brewery?</p>
        <city-input-element
          @valueChanged=${this.onCityChanged}
        ></city-input-element>
        <div class="breweries">
          ${this.breweries.map(
            brewery => html` <brewery-card .brewery=${brewery}></brewery-card>`
          )}
        </div>
      </div>
    `;
  }
}
