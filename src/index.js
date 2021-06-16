import React from 'react';
import ReactDOM from 'react-dom';
import { animals } from '../src/components/animals/animals.js';
import './styles.css';



//variables
const title='Selecciona un animal para ver un dato curioso';
const background=( <img className='background' src='https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2019/03/03/816158.jpg' alt='ocean'/>);
const images=[];
for( let animal in animals){
  images.push(
    <img 
    key={animal}
    className='animal'
    alt={animal}
    src={animals[animal].image} 
    ariaLabel={animal}
    role='button'
    onClick={displayFact}
    />
    )
    };
//boolean que hace que se muestre o no el background
const showBackground=true;

/* tenemos varias opciones para jugar con el título que mostramos dentro del h1.
*opción 1: ternary operator
  {title ==='' ? 'Click an animal for a fun fact' : title}
  
  *opcion 2 : OR operator. el primer argunmento se muetra si se evalua como true, sino se muestra el segundo*/
const animalFacts= (
  <div>
    <h1>
      {title || 'Click an animal for a fun fact'}
    </h1>
    {showBackground && background}
    <p id ='fact'></p>
    <div className='animals'>
    {images}
    </div>
</div>
);

/*If showBackground is true, background should show up. If it’s false, it should not. Use the && operator in animalFacts to implement this feature.*/

//  ** event handler function **
//ojo porque si almacenas la fución como una arrow function en una variable no funciona (aunque la declares con let)
function displayFact (e) {
const selectedAnimal= e.target.alt;
const animalInfo = animals[selectedAnimal];
const randomIndex= Math.floor(Math.random()*animalInfo.facts.length)
const funFact= animalInfo.facts[randomIndex];
document.getElementById('fact').innerHTML=funFact;
}

//rendering on screem
ReactDOM.render(
  animalFacts,
  document.getElementById('root')
  )