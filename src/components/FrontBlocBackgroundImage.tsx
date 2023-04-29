export const FrontBlocBackgroundImage = ({children, backgroundImage}) => {
    return (
        <div className="front-block-background-image">
            <div className="background-image" style={{backgroundImage: `url(${backgroundImage})`}} />
            <div className="front-block-right-image reverse">
                {children}
            </div>
        </div>
    );
}