import { Entity } from './Entity';

export interface Action<
  T extends ActionType,
  E extends Entity,
  P extends Payload<E> = Payload<E>
> {
  type: T;
  payload: P;
}

export enum ActionType {
  FETCH = 'FETCH',
  DELETE = 'DELETE',
}

export type Payload<E extends Entity> = E | E[] | ID<E>;

export type ID<E extends Entity> = E['id'];
