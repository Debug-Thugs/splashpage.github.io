import React from 'react';

const Hero=({handleLogout})=>{
    return(
        <section className='hero'>
            <nav>
                <h2>Thankyou for submitting.</h2>
                <h2>Have a good day!</h2>
                <button onClick={handleLogout}>OK</button>
            </nav>
        </section>
    );
};

export default Hero;