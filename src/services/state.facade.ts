import { Injectable } from '@angular/core';
import { injectQuery } from '@ngneat/query';
Injectable({
  providedIn: 'root',
});
export class StateFacade {
  #query = injectQuery();
}
