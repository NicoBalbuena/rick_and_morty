import Card from './Card';
/*Hago que cards reciba por propiedades a todos los personajes en una array*/
export default function Cards({characters,onClose}) {
   return( 
      <div>
         {   
            characters.map(({id,name,status,species,gender,origin,image}) => /*renderizo cada card con sus respectivas props*/
             {
                  return(
                     <Card
                        key={id}
                        id={id}
                        name={name}
                        status={status}
                        species={species}
                        gender={gender}
                        origin={origin.name}
                        image={image}
                        onClose={onClose }
                     />
                
                   )
               })
         }
      </div>);
}
