class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
        <footer id="contact" class="accent__bg">
          <div class="padding__inner wrapper">
            <h2 class="contact__heading">Contact ✨</h2>
              <form
                name="contact"
                method="POST"
                data-netlify-recaptcha="true"
                data-netlify="true"
              >
                <p class="grid-container">
                  <label class="form__name">
                    <span>Name</span><input type="text" name="name" placeholder='Your Name'/>
                  </label>
                  <label class="form__email">
                    <span>Email</span><input type="text" name="email" placeholder='Your Email'/>
                  </label>
                  <label class="form__message">
                    <span>Message</span><textarea name="message" placeholder='Your Message'></textarea>
                  </label>
                </p>
                <div data-netlify-recaptcha="true"></div>
                <p class="form__submit__btn__container">
                  <button class="form__submit__btn" type="submit">Send</button>
                </p>
              </form>

              <p>Email us <a class="black-text" href="mailto:info@ortalex.com">info@ortalex.com</a>
            </div>
          </div>
        </footer>
        `;
  }
}

customElements.define('footer-component', Footer);
