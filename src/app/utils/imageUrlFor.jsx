import sanityClient from "../sanityClient";
import imageUrlBuilder from "@sanity/image-url";

const imageBuilder = imageUrlBuilder(sanityClient);

const imageUrlFor = source => imageBuilder.image(source);

export default imageUrlFor;