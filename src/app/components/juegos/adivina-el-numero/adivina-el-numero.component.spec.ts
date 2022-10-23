import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdivinaElNumeroComponent } from './adivina-el-numero.component';

describe('AdivinaElNumeroComponent', () => {
  let component: AdivinaElNumeroComponent;
  let fixture: ComponentFixture<AdivinaElNumeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdivinaElNumeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdivinaElNumeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
