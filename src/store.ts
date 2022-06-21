
import { Observable, pluck } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs';
import { User } from './auth/shared/services/auth/auth.service';
import {Meal} from './health/shared/services/meals/meals.service'

;
import { Workout } from './health/shared/services/workouts/workouts.service';

export interface State {
  user: User,
  meals: Meal[],
  workout: Workout[]
  [key: string]: any
}

const state: State = {
  user: undefined,
  meals: undefined,
  workout: undefined
};

export class Store {

  private subject = new BehaviorSubject<State>(state);
  private store = this.subject.asObservable().pipe((distinctUntilChanged()));

  get value() {
    return this.subject.value;
  }

  select<T>(name: string): Observable<T> {
    return this.store.pipe(pluck(name));
  }

  set(name: string, state: any) {
    this.subject.next({ ...this.value, [name]: state });
  }

}
