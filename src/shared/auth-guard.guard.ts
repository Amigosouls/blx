import { CanActivateFn,Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { inject } from '@angular/core';
export const authGuardGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token')
  const router = inject(Router)
  const alertservice = inject(MessageService)

  if (token) {
    return true;
  }
  else{
  alertservice.add({
    key: "tc",
    severity: "error",
    summary: "Plese Login to Post Ad"
  });
  router.navigate(['/signin']);
  return false;
}
};
