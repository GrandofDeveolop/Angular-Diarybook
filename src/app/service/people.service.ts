import { Injectable } from '@angular/core';

@Injectable()

export class PeopleService {

  private people: any[] = [];
  constructor() {
    this.people = [
      { id: 1, name: 'Jack'},
      { id: 2, name: 'Tom'},
      { id: 3, name: 'Strom'}
    ];
  }

  getPeople(): any[] {
    return this.people;
  }

  getPerson(id: string): any {
    for (let i in this.people) {
      let person = this.people[i];
      if ( id == person.id) {
        return person;
      }
    }
    return null;
  }

}
