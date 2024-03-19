import './css/App.css';
import { useState } from 'react';
import { TwitterFollowCard } from './TwitterFollowCard.jsx';
import users from './data/users.js';

export function App () {
    {/* El uso de "<>...</>" es lo mismo que usar "<React.Fragment>" */}
    //const formatUserName = (userName) => `@${userName}` //Interpretación de datos
    const [lname, setName] = useState('Emikukis VT');
    const [luserName, setUser] = useState('Emikukis');
    console.log('lname:'+lname+', luserName:'+luserName);

    console.log('user.size:'+users.length);
    return (
        <section className='App'>
            {   
                users.map(({ userName, name, isFollowing }) => (
                    <TwitterFollowCard
                      key={userName} /*Si no se pone sale warning*/
                      userName={userName}
                      initialIsFollowing={isFollowing}
                    >
                      {name}
                    </TwitterFollowCard>
                  )) 
            }
            {/* //Este es una tarjeta extra
                Fuera del "users.map" para probar la useState del botón Cambia...
            */}
            <TwitterFollowCard initialIsFollowing userName={luserName}>{lname}</TwitterFollowCard>
            <button className='fancy-btn' onClick={ ()=> {
                if(luserName=='Emikukis')
                    { setName('Meica Planta'); setUser('Meica05'); }
                else{ setName('Emikukis VT'); setUser('Emikukis') ;}
            } }>Cambia Last User</button>            
        </section>
    );
}