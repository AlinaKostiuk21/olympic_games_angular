import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Participant, SportsType} from "../models/participant.model";

@Injectable({
  providedIn: 'root'
})

export class ParticipantService {

  private participants: Participant[] = [
    new Participant({
      id: 1,
      name: 'China',
      language: 'Chinese',
      sportsType: SportsType.Athletics,
      eventDate: new Date('8-15-20'),
      place: 7
    })];

  constructor() {
    this.init();
  }

  public init() {
  }

  public getAll(): Observable<Participant[]> {
    return of(this.participants);
  }

  public getById(participantId: number): Observable<Participant> | undefined {
    if (!participantId || !this.participants.length) {
      return;
    }
    const selectedParticipant = this.participants.find((participant: Participant) => participant.id === participantId);

    if (!selectedParticipant) {
      return;
    }

    return of(selectedParticipant);
  }

  public create(participant: Participant): Observable<Participant> {
    this.participants.push(participant);
    return of(participant);
  }

  public update(participant: Participant): Observable<Participant> {
    const selectedParticipantIndex = this.participants.findIndex((member: Participant) => member.id === participant.id);
    this.participants[selectedParticipantIndex] = participant;

    return of(participant);
  }

  public delete(participantId: number): Observable<boolean> {
    if (!participantId) {
      return of(false);
    }

    this.participants = this.participants.filter((member: Participant) => member.id !== participantId);
    return of(true);
  }
}
