import { useState } from 'react';

export function TwitterFollowCard({ children, userName, initialIsFollowing }){
    //Estados:useState
        const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
        const handleClick = () => {
            console.log('setIsFollowing:'+isFollowing);
            setIsFollowing(!isFollowing);
        }
    //Variables presonales
        const imgAlt = `Avatar de ${children}`;
    //Se añade mensaje+estilo condicional
        const fText = isFollowing ? 'Siguiendo' : 'Seguir';
        const buttonClassName = isFollowing 
            ? 'tw-followCard-button is-following'
            : 'tw-followCard-button';

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src={`./src/assets/avt_${userName}.jpg`}alt={imgAlt}/>
                <div className='tw-followCard-info'>
                    <b>{children}</b>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{fText}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de Seguir</span>
                </button>
            </aside>
        </article>
    );
}