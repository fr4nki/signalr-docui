export type PopupComponent<T> = {
  onClose: () => void;
} & T;
