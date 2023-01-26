import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadBooks } from '../root-store/actions';
import { selectBookId } from '../root-store/selectores';
import { BookState } from '../root-store/state';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  public bookId$: Observable<number>;

  constructor(private store: Store<BookState>){
    this.bookId$ = this.store.pipe(select(selectBookId));
  }

  onAdd(){
    this.store.dispatch(loadBooks({id: 1, title: "title"}));
  }
}
