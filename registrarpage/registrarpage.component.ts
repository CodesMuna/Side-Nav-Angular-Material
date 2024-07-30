import { Component, computed, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CustomSidenavComponent } from "../custom-sidenav/custom-sidenav.component";


@Component({
  selector: 'app-registrarpage',
  standalone: true,
  imports: [RouterModule, MatSidenavModule, CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, CustomSidenavComponent],
  templateUrl: './registrarpage.component.html',
  styleUrl: './registrarpage.component.css'
})
export class RegistrarpageComponent {

  collapsed = signal(false)
 
  sidenavWidth = computed(() => this.collapsed() ? '65px' : '250px');
}
