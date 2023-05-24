/**
 * *La palabra reservada Lapiz es la clase padre de mi plantilla
 */
class Lapiz {
    /**
     * *Estos son los Atributos de nuestra plantilla, que despues por medio del constructor, los parametros y los set y get vamos a poder modificar y llamar en nuestras diferentes instancias
     */
    color;
    tamaño;
    #material;
    #mina;
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
        /**
         * *set nos sirve para poder modificar los atributos de las instancias ya creadas.
         */
        set setMina(nuevaMina) {
            /**
             * *Usamos el console en set y tambien en get para poder ver en consola cuando estamos ingresando a los metodos y asi entenderlo mejor
             */
            console.log("SET");
            this.#mina = nuevaMina;
        }
        /**
         * *get nos da el atributo que tenemos, en caso de hacer un set, get nos va a dar el atributo modificado.
         */
        get tipoMina() {
            console.log("GET");
            return this.#mina;
        }

    /**
     * *El metodo estatico afilar se tiene que llamar con la clase, y en el parametro (p1) es donde le pasamos la intancia que va a utilizar el metodo 
     * @param {p1} *p1 es el parametro que le pasamos cada vez que llamamos el metodo estatico "afilar".  
     * @returns *Nos va a retornar que el parametro que le pasamos (p1) ya esta afilado!.
     */
    static afilar(p1) {
        return `La mina de ${p1} esta afilada!`;
    }
}

/**
 * *Creamos diferentes instancias de la clase Lapiz para jugar con la modificación de los Atributos.
 */
let lapiz3 = new Lapiz({})
let lapiz2 = new Lapiz({tamaño: "16cm", material: "Carbono"})
let lapiz1 = new Lapiz({color: "Rojo", tamaño: "11cm", material: "Madera", mina: "Carbon"})

/**
 * *Solicitamos en consola la información de todas nuestras instancias, despues de jugar con ellas para aprender bien como modificarlas
 */
console.log(lapiz3, lapiz2, lapiz1);

/**
 * *Solicitamos en consola que la intancia "lapiz1" utilice el metodo estatico "afilar"
 */
console.log(Lapiz.afilar(lapiz1.tipoMina));

/**
 * *Modificamos la mina de la instancia "lapiz1" con el metodo set, luego lo llamamos en consola para ver el resultado del cambio
 */
lapiz1.setMina = "Tinta";
console.log(lapiz1);


/**
 * *De aqui para abajo empezamos a hacer el ejemplo de la clase del Miercoles.
 */
console.log("=".repeat(60));
/**
 * *Creamos una subclase que hereda a la clase Lapiz, en el constructor le cambiamos la plantilla predefinida de la "mina", tambien 
 */
class boligrafo extends Lapiz {
    constructor({mina = "Metalica"}){
        super({mina});
    };
    /**
     * *Le hacemos "polomorfismo" (entre comillas porque es polimorfismo pero solo en Javascript) al metodo estatico de "afilar", ya que en la clase boligrafos no es posible afilar las puntas.
     */
    static afilar(p1) {
        return `La mina de ${p1} no se puede afilar!`;
    }
};

/**
 * *Creamos una instancia de la clase "boligrafo" y solicitamos en consola la mina modificada.
 */
let mecanico = new boligrafo({});
console.log(mecanico.tipoMina);

/**
 * *Utilizamos el set para modificar el tipo de la mina y luego utilzamos el get para llamar el tipo de la mina modificado por el set
 */
mecanico.setMina = "Aluminio"
console.log(mecanico.tipoMina);


/**
 * *Usamos el metodo estatico "afilar". OJO estamos llamando el metodo desde la clase "boligrafo" por lo que ahí ya paso por el polimorfismo y va a llegar con los cambios realizados
 */
console.log(boligrafo.afilar(mecanico.tipoMina));

/**
 * *Solicitamos por consola la instancia de "boligrafo" para poder ver el resultado de los cambios que le hicimos a los atributos.
 */
console.log(mecanico);