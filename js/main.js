/**
 * *La palabra reservada Lapiz es la clase padre de mi plantilla
 */
class Lapiz {
    /**
     * *Estos son los Atributos de nuestra plantilla, que despues por medio del constructor, los parametros y los set y get vamos a poder modificar y llamar en nuestras diferentes instancias
     */
    color
    tamaño
    #material
    #mina
    /**
     * *Constructor es con el que podemos modificar por medio del set todos los parametros de nuestras diferentes instancias de la clase Lapi y por medio del get llamamos estos parametros ya modificados 
     * @param {color}  *Este parametros es para designar el color de la instancia de nuestra clase Lapiz  
     * @param {tamaño} *Este parametros es para designar el tamaño de la instancia de nuesta clase Lapiz 
     * @param {material} *Este parametros es para designar el material de la intancia de nuesta clase Lapiz  
     * @param {mina} *Este parametros es para designar la mina de la instancia de nuesta clase Lapiz  
    */
    constructor({color = "Morado", tamaño = "9cm", material = "Aluminio", mina = "Grafito"}) {
            this.color = color;
            this.tamaño = tamaño;
            this.#material = material;
            this.#mina = mina;
        }
}

/**
 * *Creamos diferentes instancias de la clase Lapiz para modificar jugar con la modificación de los Atributos.
 */
let lapiz3 = new Lapiz({})
let lapiz2 = new Lapiz({material: "Carbono", tamaño: "16cm"})
let lapiz1 = new Lapiz({color: "Rojo", tamaño: "11cm", material: "Madera", mina: "Carbon"})
console.log(lapiz3, lapiz2, lapiz1);