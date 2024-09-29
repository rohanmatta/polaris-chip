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
    this.fancy = false;
    this.description = "I'm a junior at Penn State studying Human-Centered Design and Development. I’m passionate about building apps and working on projects that solve real-world problems, especially through backend development and optimization."
  }

  static get properties() {
    return {
      fancy: { type: Boolean, reflect: true },
      name: { type: String },
      link: { type: String },
      imageSrc: { type: String },
      description: { type: String }
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      :host([fancy]) {
        background-color: lightyellow;
        border: 2px solid fuchsia;
        box-shadow: 10px 5px 5px red;
      }

      .card {
        border: 8px solid black;
        max-width: 300px;
        margin: 8px auto;
        text-align: center;
      }

      .title {
        color: black;
        font-size: 16px;
      }

      button {
        padding: 6px 8px;
        color: white;
        background-color: black;
        border-radius: 6px;  
        width: 50%;
        font-size: 16px;    
        margin: 3px;        
      }

      button:hover {
        opacity: 0.8;
      }

      a {
        font-size: 24px;
        color: black;
      }

      img {
        width: 100%;
        height: auto;
        max-height: 200px;
        object-fit: cover;
      }

      details summary {
        text-align: left;
        font-size: 20px;
        padding: 8px 0;
      }

      details[open] summary {
        font-weight: bold;
      }

      details div {
        border: 2px solid black;
        text-align: left;
        padding: 8px;
        height: 70px;
        overflow: auto;
      }
    `;
  }

  // This method listens for the toggle event
  openChanged(e) {
    if (e.target.hasAttribute('open')) {
      this.fancy = true;
    } else {
      this.fancy = false;
    }
  }

  render() {
    return html`
      <div class="card">
        <img src="${this.imageSrc}" alt="Profile Image">
        <div class="container">
          <h4 class="title"><b>${this.name}</b></h4>
          <a href="${this.link}">LinkedIn</a>
          <p><button>Contact</button></p>
          
          <!-- Add description -->
          <details ?open="${this.fancy}" @toggle="${this.openChanged}">
            <summary>Description</summary>
            <div>
              ${this.description}
            </div>
          </details>
        </div>
      </div>
    `;
  }
}

customElements.define(MyCard.tag, MyCard);