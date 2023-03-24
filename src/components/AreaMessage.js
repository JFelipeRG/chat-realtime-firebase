import { LitElement, html, css, nothing } from "lit";

class AreaMessage extends LitElement {
  static get properties() {
    return {
      data: { type: Object }
    };
  }

  static get styles() {
    return css`
      :host {
        padding: 15px;
        border-radius: 10px;
        transition: all 1s;
        background-color: #f0f0f0;
      }

      :host(:hover) {
        background-color: #fb3;
      }

      h1{
        font-size: 1rem;
      }
    `;
  }

  render() {
    return html`
      ${this.data.nickName && this.data.messageUSer
        ? nothing
        : html`<h1>${this.data.nickname}</h1>
          <p>${this.data.messageUSer}</p>`
      }
    `;
  }
}

customElements.define("area-message", AreaMessage);
