import {} from 'lit-html';
import { property, LitElement, html, customElement } from 'lit-element';

@customElement('city-input-element')
export class CityInput extends LitElement {
  @property({ type: String }) value: string = '';

  render() {
    return html`
      <input
        id="input"
        autofocus
        placeholder="New York"
        .value=${this.value}
        @change=${this.onChange}
      />
    `;
  }

  private onChange = (e: Event) => {
    e.stopImmediatePropagation();
    this.dispatchValueChange((e.target as HTMLInputElement).value);
  };

  private dispatchValueChange = (value: string) => {
    this.dispatchEvent(
      new CustomEvent('valueChanged', {
        detail: value,
      })
    );
  };
}
