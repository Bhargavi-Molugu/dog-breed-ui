import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DogBreedComponent } from './dog-breed.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [DogBreedComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(DogBreedComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'dog-breed-ui'`, () => {
    const fixture = TestBed.createComponent(DogBreedComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('dog-breed-ui');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(DogBreedComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('dog-breed-ui app is running!');
  });
});
