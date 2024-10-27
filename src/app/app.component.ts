import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SortingDataService } from './sorting-data.service';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule], // Add CommonModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Fixed typo to 'styleUrls'
})
export class AppComponent {
  users: any[] = []; // Initialize as an empty array

  constructor(private sortData: SortingDataService) {
    // Fetch the data on component initialization
    this.sortData.users().subscribe((data) => {
      this.users = data;
    });
  }

  sortAscending() {
    this.users.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      return nameA.localeCompare(nameB); // Sort in ascending order
    });
  }

  sortDescending() {
    this.users.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      return nameB.localeCompare(nameA); // Sort in descending order
    });
  }

  //trackById(index: number, user: any): number {
  // return user.id; // Track by user ID for performance
  // }
}
