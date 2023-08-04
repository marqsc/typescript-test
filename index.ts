import './style.css';
import { Usuario } from './Usuario';
//import { Humano } from './interfaces';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>IFBA - LP2</h1>`;

const us01 = new Usuario('Marcos');

//console.log(us01.getNome());

//us01.imprimir();
