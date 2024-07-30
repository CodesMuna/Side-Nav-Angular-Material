import { CommonModule } from '@angular/common';
import { Component, computed, Input, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MenuItemComponent } from '../menu-item/menu-item.component';

export type MenuItem = {
  icon: string,
  label: string,
  route: string,
  subItems?: MenuItem[];
}

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, RouterModule, MenuItemComponent],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.css'
})
export class CustomSidenavComponent {
  sideNavCollapsed = signal(false)
  @Input() set collapsed(val: boolean){
    this.sideNavCollapsed.set(val);
  }

  menuItems = signal<MenuItem[]>([
    {
      icon: 'home',
      label: 'Home',
      route: 'home'
    },
    {
      icon: 'explicit',
      label: 'Enrollment',
      route: 'enrollment',
      subItems: [
        {
          icon: 'dns',
          label: 'Pending Enrolees',
          route: 'enrollment/enrollmentpage/approval',
        },
        {
          icon: 'assignment_ind',
          label: 'Monitor',
          route: 'enrollment/enrollmentpage/monitor',
        },
        {
          icon: 'recent_actors',
          label: 'Roster',
          route: 'enrollment/enrollmentpage/roster',
        },
      ]
    },
    {
      icon: 'chat',
      label: 'Message',
      route: 'message'
    }
  ]);
 
  profilePicSize = computed( ()=> this.sideNavCollapsed() ? '32' : '100');
}
