import Image from 'next/image';

export const FrontBlocBackgroundImage = ({children, backgroundImage} : any) => {
    return (
        <div className="front-block-background-image">
            <Image className="background-image" src={backgroundImage} width="1100" height="800" loading="lazy" alt="anyu bilde" />
            <div className="front-block-right-image reverse">
                {children}
            </div>
        </div>
    );
}