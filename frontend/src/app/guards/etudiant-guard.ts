import { CanActivateFn } from '@angular/router';

export const etudiantGuard: CanActivateFn = (route, state) => {
  return true;
};
