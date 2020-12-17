import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddPetitionPage } from './add-petition.page';

describe('AddPetitionPage', () => {
  let component: AddPetitionPage;
  let fixture: ComponentFixture<AddPetitionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPetitionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddPetitionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
