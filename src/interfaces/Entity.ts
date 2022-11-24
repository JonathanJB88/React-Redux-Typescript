export type UID = number | string;

export interface Entity<I extends UID = number> {
  id: I;
}
