import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

 export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.name = "Rohan Matta";
    this.link = "https://www.linkedin.com/in/rohan-matta/";
    this.imageSrc = "https://static.vecteezy.com/system/resources/previews/031/610/037/non_2x/a-of-a-3d-cartoon-little-boy-in-class-world-students-day-images-ai-generative-photo.jpg";
  }

  static get styles() {
    return css`
      :host {
        display: block;
        font-size: 16px;
      }
      h1, h2 {
        margin: 8px 0;
      }
      h3 {
        font-size: 20px;
        margin: 8px 0;
      }
      .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        max-width: 300px;
        margin: auto;
        text-align: center;
        transition: 0.6s all ease-in-out;
      }
      .card.big {
        max-width: 500px;
      }
      .card-text {
        background-color: white;
        padding: 16px;
      }
      .name {
        font-size: 1.25em;
      }
      button {
        border: none;
        outline: 0;
        padding: 8px;
        color: white;
        background-color: black;
        cursor: pointer;
        width: 100%;
        font-size: 18px;
      }
      a {
        text-decoration: none;
        font-size: 22px;
        color: black;
      }
      button:hover, a:hover {
        opacity: 0.7;
      }
    `;
  }

  render() {
    return html`
      <div class="card">
        <img class="card-image" src="${this.imageSrc}" alt="Profile Image" style="width:100%">
        <div class="card-text">
          <h3 class="name"><b>${this.name}</b></h3>
          <a href="${this.link}">LinkedIn</a>
          <p><button>Contact</button></p>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      name: { type: String },
      link: { type: String },
      imageSrc: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);