import {v4 as uuidv4} from 'uuid';

export class Participant {
  id: string;
  name: string;
  language: string;
  sportsType: SportsType;
  eventDate: Date;
  place: number;


  constructor({id, name, language, sportsType, eventDate, place}: Partial<Participant> = {}) {
    this.id = id || Participant.generateId();
    this.name = name || 'Unknown name';
    this.language = language || 'Unknown language';
    this.sportsType = sportsType || SportsType.ChooseSportsType;
    this.eventDate = eventDate || new Date();
    this.place = place || 0;
  }

  static generateId(): string {
    return uuidv4();
  }
}

export enum SportsType {
  ChooseSportsType = 'ChooseSportsType',
  Athletics = 'Athletics',
  Boxing = 'Boxing',
  Fencing = 'Fencing',
  Gymnastics = 'Gymnastics',
  Swimming = 'Swimming'
}
