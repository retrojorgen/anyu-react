export default function Hero() {
  return (
    <div id="hero">
      <div id="hero-content-with-image">
        <div id="author">
          <div id="author-name">Ildiko Balog</div>
          <div id="author-title">Daglig leder og akupunktør</div>
        </div>
        <div id="hero-content">
          <h1>Bestill time og konsultasjon online:</h1>
          <div id="hero-action-buttons">
            <div id="hero-action-buttons-online-order">
              <a
                href="https://akuanyuklinikken.bestille.no/"
                target="_blank"
                className="hero-action-buttons-online-order-button"
                aria-label="les mer om akupuntur"
              >
                <span>Akupunktur</span>
              </a>
            </div>
          </div>
          <h2>Eller:</h2>
          <div id="hero-secondary-buttons">
            <a
              href="https://www.facebook.com/anyuklinikken/"
              className="hero-action-buttons-online-order-button"
              id="hero-action-buttons-facebook-like"
              aria-label="Send beskjed på facebook"
            >
              <span>Send beskjed på facebook</span>
            </a>
            <a
              href="tel:40670885"
              itemProp="telephone"
              id="hero-action-buttons-number-highlight"
              className="hero-action-buttons-online-order-button"
              aria-label="Telefonnummer du kan ringe"
            >
              <span>Ring:40670885</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
