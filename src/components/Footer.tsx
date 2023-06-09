export const Footer = () => {
    return (
        <footer id="footer" role="contentinfo">
            <div id="footer-container" itemType="https://schema.org/Library">
                <div>
                    <article>
                        <div itemProp="name">Anyu klinikken AS</div>
                        <div itemProp="name">Din lokale akupunktør på Lørenskog</div>
                        <h1>Kontaktinformasjon</h1>
                        <div>Telefonnummer: <a href="tel:406 70 885" aria-label="telefonnummer" itemProp="telephone">406 70 885</a></div>
                        <div>E-post adresse: <a href="mailto:post@anyu.no" aria-label="e-postadresse" itemProp="email">post@anyu.no</a></div> 
                        <div itemProp="location address" itemScope itemType="https://schema.org/PostalAddress">
                            <h5 itemProp="contactType">Postadresse</h5>
                            <span itemProp="streetAddress">Skårersletta 18, 2. etasje</span><br />
                            <span itemProp="postalCode">1473</span>&nbsp;<span itemProp="addressLocality">Lørenskog</span>
                            <span itemProp="addressRegion">Viken</span><br />
                            <span itemProp="addressCountry">Norge</span><br />
                        </div>
                    </article>
                    <article>
                    <h1>Åpningstider</h1>
                        <ul>
                            <li itemProp="openingHoursSpecification" itemScope itemType="https://schema.org/OpeningHoursSpecification"><link itemProp="dayOfWeek" href="https://schema.org/Monday" />Mandag:  <time itemProp="opens" content="12:00:00">13:00</time> - <time itemProp="closes" content="18:00:00">18:00</time></li>
                            <li itemProp="openingHoursSpecification" itemScope itemType="https://schema.org/OpeningHoursSpecification"><link itemProp="dayOfWeek" href="https://schema.org/Tuesday" />Tirsdag: <time itemProp="opens" content="10:00:00">10:00</time> - <time itemProp="closes" content="18:00:00">16:00</time></li>
                            <li itemProp="openingHoursSpecification" itemScope itemType="https://schema.org/OpeningHoursSpecification"><link itemProp="dayOfWeek" href="https://schema.org/Wednesday" />Onsdag:  <time itemProp="opens" content="10:00:00">13:30</time> - <time itemProp="closes" content="17:00:00">18:00</time></li>
                        </ul>
                        <p>
                            Finner du ikke en time som passer deg? Ta kontakt!
                        </p>
                    </article>
                </div>
                <div>
                    <iframe loading="lazy" className="footer-map" title="google map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7997.479086395043!2d10.9543161!3d59.9260062!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe01aa52ded1eaadf!2sAnyu+Klinikken!5e0!3m2!1sen!2sno!4v1526804328635" width="600" height="450"></iframe>
                </div>
            </div>
        </footer>
    );
}