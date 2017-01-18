import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(logs: any, term: any): any {
		if (term == null) return logs;

		const filtered = logs.map(log =>
		Object.keys(log).forEach(key => {
			var item = log[key];
			if (typeof item !== 'number' && item.toLowerCase().includes(term)) {
				return item;
			}
		}));
		console.log(filtered);
		return filtered;
  }
}


