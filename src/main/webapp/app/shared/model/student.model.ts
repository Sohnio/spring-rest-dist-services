export interface IStudent {
  id?: number;
  name?: string;
}

export class Student implements IStudent {
  constructor(public id?: number, public name?: string) {}
}
