import React from 'react';


//Retornar una funcion de manera explicita
const About = () => (
    <div className="About">
        <div className="About__container">
            <div className="About__avatar">
                <figure>
                    <img src="/" alt="Mi avatar"/>
                </figure>
            </div>
            <div className="About__name">
                <h2>David Isai López Fandiño</h2>
            </div>
            <div className="About__Profession">
                <p>FrontEnd Developer in Geek Academy</p>
            </div>
            <div className="About__descripcion">
                <p>Soy desarrollador frontend y me encanta crear nuevas cosas</p>
            </div>
            <div className="About__location">
                <p>Medellín, Colombia</p>
            </div>
            <div className="About__social">
                Social
            </div>
        </div>
    </div>
);

export default About;

/*
const About = function(){
    return <h1>Hola mundo Geek!</h1>
}

const AboutDos = () => {
    return <h1>Hola mundo Geek!</h1>
}
*/
