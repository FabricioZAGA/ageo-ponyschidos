import { Producto, calcIVA } from './07-dest-arg';

const carritoCompras:Producto[]=[
    {
        desc:'Telefono 1',
        precio: 100
    },
    {
        desc:'Telefono 2',
        precio: 100
    }
]

const [total,iva] =  calcIVA(carritoCompras);

console.log(total,iva)