export const Card = ({ titulo, descripcion, pnClick }) => {
    return (
        <div
         className="Card"
         onClick={onClick}
         style={{ cursor: "pointer" }}
         >
         <h3>{titulo}</h3>
         <p>{descripcion}</p>  
        </div>
    );
};