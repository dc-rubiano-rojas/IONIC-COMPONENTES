import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[],
            texto: string,
            columna: string): any[] {

    if (texto === ''){
        return arreglo;
    }

    // Se pasa todo a minuscula, para poder evaluarlo
    texto = texto.toLowerCase();

    // el includes() es una funcion de los string que me dice que
    // si el item[columna].toLowerCase() incluye lo que le estoy pasando
    // por el texto
    return arreglo.filter( item => {
      return item[columna].toLowerCase()
                        .includes(texto);
    });

  }

}
