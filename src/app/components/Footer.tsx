import sanityClient from '../sanityClient';
export const Footer = async () => {
  const settings = await sanityClient.fetch(`
  *[_type == "settings"][0]
  `);
  return (
    <footer id="footer" role="contentinfo">
      <div
        id="footer-container"
        itemType="https://schema.org/Library"
      >
        <div>
          <article>
            <div itemProp="name">{settings.title}</div>
            <div itemProp="name">
              { settings.tagline }
            </div>
            <h1>Kontaktinformasjon</h1>
            <div>
              Telefonnummer:{' '}
              <a
                href={'tel:' + settings.phone}
                aria-label="telefonnummer"
                itemProp="telephone"
              >
                { settings.phone }
              </a>
            </div>
            <div>
              E-post adresse:{' '}
              <a
                href={'mailto:' + settings.email}
                aria-label="e-postadresse"
                itemProp="email"
              >
                {settings.email}
              </a>
            </div>
            <div
              itemProp="location address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <h5 itemProp="contactType">Postadresse</h5>
              <span itemProp="streetAddress">
                {settings.address.street}
              </span>
              <br />
              <span itemProp="postalCode">{ settings.address.postalCode}</span>&nbsp;
              <span itemProp="addressLocality">{settings.address.city}</span>
              <br />
              <span itemProp="addressRegion">{settings.address.region}</span>
              <br />
              <span itemProp="addressCountry">{settings.address.country}</span>
              <br />
            </div>
          </article>
          <article>
            <h1>Åpningstider</h1>
            <ul>
              {settings.openingHours.map((openingHour : any, index : number) => (
                <li
                  key={index}
                  itemProp="openingHoursSpecification"
                  itemScope
                  itemType="https://schema.org/OpeningHoursSpecification"
                >
                  <link
                    itemProp="dayOfWeek"
                    href={`https://schema.org/${openingHour.day}`}
                  />
                  {openingHour.day}:&nbsp;
                  <time itemProp="opens" content={openingHour.from}>
                    {openingHour.from}
                  </time>
                  &nbsp;-&nbsp;
                  <time itemProp="closes" content={openingHour.to}>
                    {openingHour.to}
                  </time>
                </li>
              ))
              }
            </ul>
            <p>Finner du ikke en time som passer deg? Ta kontakt!</p>
          </article>
        </div>
        <div>
          <iframe
            loading="lazy"
            className="footer-map"
            title="google map"
            src={ settings.googlemapsLink}
            width="600"
            height="450"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};
