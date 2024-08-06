import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
})
export class DashboardItemComponent {
  @Input({required: true})
  imagePath!: string;

  @Input({required: true})
  altText?: string;

  @Input({required: true})
  h2Text!: string;

}
