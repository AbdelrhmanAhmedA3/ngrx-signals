import {signalStore, withState} from '@ngrx/signals';
import { TodoItem } from './todos.model';

type TodosState = {todos:TodoItem[]};

const initialState: TodosState = {
    todos: [
        {id: 1, title: 'Learn NgRx Signals', completed: false},
        {id: 2, title: 'Build an awesome app', completed: true},
    ]
}

export const todosStore = signalStore(
  {providedIn:'root'},
  withState(initialState)
);
