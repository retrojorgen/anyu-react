import { getSanityImageUrl } from '../utils/portableTextComponents';
export const FrontBlockBackgroundImage = ({ children, backgroundImage }: any) => {
  return (
    <div className="front-block-background-image">
      <div className="background-image" style={{ backgroundImage: "url(" + getSanityImageUrl(backgroundImage) + ")" }}>  </div>
      <div className="front-block-right-image reverse">
        {children}
      </div>
    </div>
  );
}