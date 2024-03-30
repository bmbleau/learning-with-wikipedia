import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WikipediaAPIService } from './wikipedia.service';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { Observable, combineLatest, map, of, shareReplay, startWith, take, tap } from 'rxjs';
import { Language } from './language/language.enum';
import { ArticleMaskDirective } from './article/article-mask.directive';
import { Store, select } from '@ngrx/store';
import { Article } from './article/article.model';
import { articleContent, articleDescription, articleList, articleTitle, guesses, loading, selectedId } from './article/article.selectors';
import { ADD_GUESS, LOAD_ARTICLE } from './article/article.actions';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateDirective } from './language/translate.directive';
import { LanguageSettings } from './language/language.model';
import { SET_LANGUAGE } from './language/language.actions';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { selectedLanguage } from './language/language.selectors';

function noWhitespaceValidator(control: FormControl) {
  return (control.value || '').trim().length? null : { 'whitespace': true };       
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ArticleMaskDirective,
    TranslateDirective,
    RouterOutlet,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatTooltipModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  providers: [WikipediaAPIService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public readonly languageSettings$ = of({ language: Language.deutsch });

  public readonly loading$ = this.articleStore.pipe(select(loading));

  public readonly language$ = this.languageSettingsStore.pipe(select(selectedLanguage));

  public readonly articleId$ = this.articleStore.pipe(select(selectedId));
  public readonly title$ = this.articleStore.pipe(select(articleTitle));
  public readonly description$ = this.articleStore.pipe(select(articleDescription));
  public readonly content$ = this.articleStore.pipe(select(articleContent));
  public readonly guesses$ = this.articleStore.pipe(select(guesses));

  public readonly articles$ = this.articleStore.pipe(select(articleList));

  public readonly article$ = combineLatest(
    [this.title$, this.description$, this.content$]
  ).pipe(
    shareReplay(1),
    map(([title, description, content]) => ({
      title,
      description,
      content
    })),
  );

  public guessForm = this.formBuilder.group({
    currentGuess: '',
  });

  public languageSelector = new FormControl(Language.deutsch);

  constructor(
    private formBuilder: FormBuilder,
    private readonly articleStore: Store<Article>,
    private readonly languageSettingsStore: Store<LanguageSettings>,
  ) {}

  public ngOnInit() {
    this.language$.pipe(take(1)).subscribe((language: any) => {
      if (language) this.languageSelector.setValue(language);
    });
    
    this.articleStore.dispatch(LOAD_ARTICLE());

    this.articleStore.subscribe(console.log);

    this.languageSelector.valueChanges.subscribe((language) => {
      this.articleStore.dispatch(SET_LANGUAGE({ language } as any));
    })
  }

  public submit() {
    const guess = this.guessForm.value.currentGuess;

    if (guess) {
      this.articleId$.pipe(take(1)).subscribe((id: string) => {
        this.articleStore.dispatch(ADD_GUESS({ guess, id }));

        this.guessForm.reset();
      })
    }
  }
}
