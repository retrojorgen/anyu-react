import Script from "next/script";
export default function FooterScripts() {
    return (
        <>
            <div id="fb-root"></div>
            <Script
            id="facebook-connect"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `(function(d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) return;
                    js = d.createElement(s); js.id = id;
                    js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=494714660619366";
                    fjs.parentNode.insertBefore(js, fjs);
                  }(document, 'script', 'facebook-jssdk'));`,
            }}
            />
            <Script
            id="google-conversion-id"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `/* <![CDATA[ */
                var google_conversion_id = 968586156;
                var google_conversion_label = "ht0oCO_ktnsQrOftzQM";
                var google_remarketing_only = false;
                /* ]]> */`,
            }}
            />
            <Script src="//www.googleadservices.com/pagead/conversion.js" strategy="afterInteractive" />
            <div style={{"display":"inline"}}>
                <img height="1" width="1" style={{"borderStyle":"none"}} alt="" src="//www.googleadservices.com/pagead/conversion/968586156/?label=ht0oCO_ktnsQrOftzQM&amp;guid=ON&amp;script=0" />
            </div>
        </>
    )
}