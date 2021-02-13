// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
// 	name: 'filter'
// })
// export class FilterPipe implements PipeTransform {

// 	transform(value: any, searchText, key: string): any {
		
// 		if (value.length === 0 || value.searchText === '') {
// 			return value;
// 		}
		// let resultArra = [];
		// for (let item of key) {
		// 	console.log("kkkkkkkkkk", item);
		// 	for (var x of value) {
		// 		console.log("entreeeeeeeeeeeeeeee", typeof (x));
		// 		if (x[item].includes(searchText.toLowerCase()) && x[item].startsWith(searchText.toLowerCase())) {
		// 			resultArra.push(x);
		// 			console.log("entreeeeeeeeeeeeeeee", resultArra);
		// 		}
		// 	}
		// }
		// if(key.length != 0){
		// var k = key[0]
		// }
		// console.log("keeeeeeeeeeeeeeee",resultArra)
		//  const result = new Set(resultArra);
		//  console.log("keeeeeeeeeeeeeeeefinal",result)
		// return result;
// 		  const resultArra = [];
// 		  for (let item of value){
// 			  if(item['key'].includes(searchText.toLowerCase())){
// 				  resultArra.push(item);
// 			  }
// 		  }
// 		  return resultArra.filter((x:any) =>
// 				   x.key.toLowerCase().startsWith(searchText.toLowerCase())|
		
// 	}
// }


import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchText: string, pName:string): any {
    if(value.length === 0 || value.searchText === ''){
    	return value;
    }
const resultArra = [];
for (let item of value){
	if(item[pName].includes(searchText)){
		resultArra.push(item);
	}
}
return resultArra.filter((x: any) => x[pName].toLowerCase().startsWith(searchText.toLowerCase()));

}
}
