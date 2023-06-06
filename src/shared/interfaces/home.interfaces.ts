export interface ICard {
  cardReference: React.RefObject<HTMLDivElement>;
  setTransition: () => void;
  cleanTransition: () => void;
}
