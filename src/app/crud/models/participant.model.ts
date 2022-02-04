export class Participant {
  id: number;
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
    this.place = place || 1;
  }

  static generateId() {
    return (Math.random() * 100);
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
