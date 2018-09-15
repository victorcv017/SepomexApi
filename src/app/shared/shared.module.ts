import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatInputModule, MatOptionModule, MatSelectModule,  MatTableModule, MatGridList, MatGridListModule, MatPaginatorModule} from '@angular/material';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button'
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    MatGridListModule,
    MatPaginatorModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    MenuComponent,
    FooterComponent,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatGridListModule,
    MatPaginatorModule,
    FormsModule
  ],
  declarations: [MenuComponent, FooterComponent]
})
export class SharedModule { }
