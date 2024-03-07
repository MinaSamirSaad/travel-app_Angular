import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchTerm: string, category: string): any[] {
    if (category) {
      items = items.filter((item) =>
        item.categoryName.toLowerCase().includes(category.toLowerCase())
      );
    }
    console.log({ searchTerm });
    if (!items || !searchTerm) {
      return items;
    }
    console.log("category", category);
    return items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
