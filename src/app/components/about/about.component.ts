import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  containers: { cards: { name: string; title: string; image: string }[] }[] = [
    {
      cards: [
        { name: 'Container 1 - Card 1', title: 'Secretary General', image: 'images/Screenshot 2026-03-05 230011.png' },
        { name: 'Container 1 - Card 2', title: 'Secretary General', image: 'images/Screenshot 2026-03-05 230011.png' },
        { name: 'Container 1 - Card 3', title: 'Secretary General', image: 'images/Screenshot 2026-03-05 230011.png' }
      ]
    },
    {
      cards: [
        { name: 'Container 2 - Card 1', title: 'Secretary General', image: 'images/Screenshot 2026-03-05 230011.png' },
        { name: 'Container 2 - Card 2', title: 'Secretary General', image: 'images/Screenshot 2026-03-05 230011.png' },
        { name: 'Container 2 - Card 3', title: 'Secretary General', image: 'images/Screenshot 2026-03-05 230011.png' },
        { name: 'Container 2 - Card 4', title: 'Secretary General', image: 'images/Screenshot 2026-03-05 230011.png' }
      ]
    },
    {
      cards: [
        { name: 'Container 3 - Card 1', title: 'Secretary General', image: 'images/Screenshot 2026-03-05 230011.png' },
        { name: 'Container 3 - Card 2', title: 'Secretary General', image: 'images/Screenshot 2026-03-05 230011.png' }
      ]
    },
    {
      cards: [
        { name: 'Container 4 - Card 1', title: 'Secretary General', image: 'images/Screenshot 2026-03-05 230011.png' }
      ]
    }
  ];

  currentIndex = 0;
  whyOpen = false;
  howOpen = false;

  get totalContainers(): number {
    return this.containers.length;
  }

  get trackTransform(): string {
    return `translateX(${-this.currentIndex * 25}%)`;
  }

  ngOnInit(): void {
    this.currentIndex = 0;
  }

  slideLeft(): void {
    this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.totalContainers - 1;
  }

  slideRight(): void {
    this.currentIndex = this.currentIndex < this.totalContainers - 1 ? this.currentIndex + 1 : 0;
  }

  goTo(index: number): void {
    this.currentIndex = index;
  }

  toggleWhy(): void {
    this.whyOpen = !this.whyOpen;
  }

  toggleHow(): void {
    this.howOpen = !this.howOpen;
  }
}
