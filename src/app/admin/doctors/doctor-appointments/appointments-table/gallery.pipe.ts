import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gallery'
})
export class GalleryPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
