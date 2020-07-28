import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bradcrumbs',
  templateUrl: './bradcrumbs.component.html',
  styles: [
  ]
})
export class BradcrumbsComponent implements OnInit, OnDestroy {

  public titulo = '';
  public tituloSubs$: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.tituloSubs$ = this.getArgumentosRuta()
    .subscribe( ({ titulo }) => {
      console.log(titulo);
      this.titulo = titulo;
      document.title = `AdminPro - ${ titulo }`;
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  getArgumentosRuta(): any {
    return this.router.events
      .pipe(
        filter( event => event instanceof ActivationEnd ),
        filter( (event: ActivationEnd) => event.snapshot.firstChild === null ),
        map( (event: ActivationEnd) => event.snapshot.data )
      );
  }
}
