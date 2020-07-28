import { Pipe, PipeTransform } from '@angular/core';
import Car from 'models/car';

@Pipe({
  name: 'filter',
  pure: false
})//-- pure: false, por si se llegan a cargar mas datos, que se puedan agregar de forma dinamica al filter
export class FilterPipe implements PipeTransform {

  transform(value: Car[], filterString: string): any {
    if (value.length === 0 || filterString === ''){
      return value;
    }
    const resultArray = [];

    for (const item of value){
      if (item['name'].includes(this.capitalize(filterString)) || item['segment'].includes(this.capitalize(filterString)) || item['year']=== +filterString || item['price'] === +filterString){
        resultArray.push(item)
      }
    }
    return resultArray;
  }
  capitalize(string){
    return string[0].toUpperCase() +  
            string.slice(1)
  }
}
