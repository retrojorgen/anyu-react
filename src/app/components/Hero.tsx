import sanityClient from '../sanityClient';

export const Hero = async () => {
  const frontpage = await sanityClient.fetch(`
  *[_type == "frontpage"][0]
  `);
  return (
    <>
      <div id="hero">
        <div id="hero-content-with-image">
          <div id="author">
            <div id="author-name">
              {frontpage.heroContent.nameCreator}
            </div>
            <div id="author-title">
              {frontpage.heroContent.titleCreator}
            </div>
          </div>
          <div id="hero-content">
            <h1>{frontpage.heroContent.textActionButtons}</h1>
            <div id="hero-action-buttons">
              <div id="hero-action-buttons-online-order">
                <a
                  href={frontpage.heroContent.bookingUrl}
                  target="_blank"
                  className="hero-action-buttons-online-order-button"
                  aria-label="Bestillingslenke"
                >
                  <span>
                    {frontpage.heroContent.bookingButtonName}
                  </span>
                </a>
              </div>
            </div>
            <h2>{frontpage.heroContent.textAdditionalButtons}</h2>
            <div id="hero-secondary-buttons">
              <a
                href={frontpage.heroContent.facebookBookingUrl}
                className="hero-action-buttons-online-order-button"
                id="hero-action-buttons-facebook-like"
                aria-label={frontpage.heroContent.facebookButtonText}
              >
                <span>
                  {frontpage.heroContent.facebookButtonText}
                </span>
              </a>
              <a
                href={`tel:${frontpage.heroContent.phoneNumberBooking}`}
                itemProp="telephone"
                id="hero-action-buttons-number-highlight"
                className="hero-action-buttons-online-order-button"
                aria-label={`${frontpage.heroContent.phoneNumberBookingText} ${frontpage.heroContent.phoneNumberBooking}`}
              >
                <span>
                  {frontpage.heroContent.phoneNumberBookingText}{' '}
                  {frontpage.heroContent.phoneNumberBooking}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
