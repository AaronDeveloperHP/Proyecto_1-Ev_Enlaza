import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserPetitionsPage } from './user-petitions.page';

describe('UserPetitionsPage', () => {
  let component: UserPetitionsPage;
  let fixture: ComponentFixture<UserPetitionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPetitionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserPetitionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
