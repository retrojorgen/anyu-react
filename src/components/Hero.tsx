import { ContentRestrain } from "./ContentRestrain"
import Image from "next/image"
import AnyuHero from "@/images/anyu-hero-clean.jpg"
export default function Hero () {
    return (
        <div id="hero">
            <ContentRestrain>
                <div id="hero-content-with-image">
                    <div id="hero-content">
                        <h1>Bestill time og konsultasjon online:</h1>
                        <div id="hero-action-buttons">
                            <div id="hero-action-buttons-online-order">
                                <a href="https://akuanyuklinikken.bestille.no/" target="_blank" className="hero-action-buttons-online-order-button">Akupunktur</a>
                                <a href="https://hanneshelsoform.bestille.no/OnCust2/#!/booking" target="_blank" className="hero-action-buttons-online-order-button">Massasje</a>
                            </div>
                            <h2>Eller:</h2>                            
                            <a href="https://www.facebook.com/anyuklinikken/" className="hero-action-buttons-online-order-button" id="hero-action-buttons-facebook-like">Send beskjed på facebook</a>
                            <div id="hero-action-buttons-call-us" className="hero-action-buttons-online-order-button">
                                Telefon: <a href="tel:40670885" itemProp="telephone" id="hero-action-buttons-number-highlight">40670885</a>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentRestrain>
	</div>
    )
}