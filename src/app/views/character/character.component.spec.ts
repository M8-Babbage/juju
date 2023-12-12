import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { CardComponent } from '@components/card/card.component';
import { ApiService } from '@services/api.service';
import { CharacterComponent } from './character.component';

const ApiServiceMock = {
  getCharacterById: jest.fn()
};

describe('Character component', () => {
  let component: CharacterComponent;
  let fixture: ComponentFixture<CharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterComponent, CardComponent],
      providers: [
        {
          provide: ApiService,
          useValue: ApiServiceMock
        },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({ id: '2' })
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
