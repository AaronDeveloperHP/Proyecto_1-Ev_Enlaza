import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PetitionsPage } from './petitions.page';

describe('PetitionsPage', () => {
  let component: PetitionsPage;
  let fixture: ComponentFixture<PetitionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetitionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PetitionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
