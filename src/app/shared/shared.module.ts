import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, MdbCollapseModule],
  exports: [NavbarComponent],
})
export class SharedModule {}
