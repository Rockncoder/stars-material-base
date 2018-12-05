import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {Convert2KPipe} from '../convert2k/convert2k.pipe';
import {TimeAgoPipe} from 'angular2-moment';
import {MatIconModule, MatMenuModule, MatRadioModule, MatInputModule, MatListModule} from '@angular/material';
import {GitHubService} from '../git-hub.service';
import {ResultsListComponent} from './results-list.component';
import {HttpClientModule} from '@angular/common/http';


describe('ResultsListComponent - ', () => {
  let component: ResultsListComponent;
  let fixture: ComponentFixture<ResultsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, FormsModule, RouterTestingModule, MatIconModule,
        MatMenuModule, MatRadioModule, MatInputModule, MatListModule, HttpClientModule
      ],
      declarations: [ResultsListComponent, Convert2KPipe, TimeAgoPipe],
      providers: [GitHubService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
