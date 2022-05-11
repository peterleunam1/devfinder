import './card.scss';

export default function Card ({size, children}){
    const sizeCard = size === "small" ? "card-small" : "card-big";
    
    return (
        <div className={sizeCard}>
            {children}
        </div>
    )
}