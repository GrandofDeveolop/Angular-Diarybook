export class Todo {
  id: number;
  title: string = '';
  complete: boolean = false;
  content: string = '';
  state:boolean =false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
