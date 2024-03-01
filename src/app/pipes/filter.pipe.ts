import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchTerm: string): any[] {
    console.log({ searchTerm });
    if (!items || !searchTerm) {
      return items;
    }
    return items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
