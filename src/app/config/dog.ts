import {Weight} from "./weight";
import {isDefaultLibrary} from "@angular/compiler-cli/ngcc/src/packages/source_file_cache";

export class Dog {
  id: number;
  life_span: string;
  name: string;
  reference_image_id: string;
  temperament: string;
  "weight": Weight;

  constructor(id: number, life_span: string, name: string, ref: string, temp: string, weight: Weight) {
    this.id = id;
    this.life_span = life_span;
    this.name = name;
    this.reference_image_id = ref;
    this.temperament = temp;
    this.weight = weight;
  }
}
