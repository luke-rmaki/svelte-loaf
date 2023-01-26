export type Toast = {
  message: string;
  timeout?: number;
  id?: string;
  autohide?: boolean;
  callback?: () => void;
  type: 'message' | 'warning' | 'error';
}
