import { Component, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
  results = [
    { unit: 'Unit 5', category: 'Technology', percentage: 25 },
    { unit: 'Unit 12', category: 'Ecology', percentage: 44 },
    { unit: 'Unit 9', category: 'Real estate', percentage: 40 },
    { unit: 'Unit 8', category: 'Education', percentage: 15 },
    { unit: 'Unit 16', category: 'Job market', percentage: 76 },
  ];
  learningData = [
    {
      day: 'Mon',
      activities: [
        { class: 'bg-danger', height: 30 },
        { class: 'bg-warning', height: 20 },
        { class: 'bg-primary', height: 40 },
      ],
    },
    {
      day: 'Tue',
      activities: [
        { class: 'bg-danger', height: 25 },
        { class: 'bg-warning', height: 15 },
        { class: 'bg-primary', height: 35 },
      ],
    },
    {
      day: 'Wed',
      activities: [
        { class: 'bg-danger', height: 10 },
        { class: 'bg-primary', height: 30 },
      ],
    },
    {
      day: 'Thu',
      activities: [
        { class: 'bg-warning', height: 20 },
        { class: 'bg-primary', height: 50 },
      ],
    },
    {
      day: 'Fri',
      activities: [
        { class: 'bg-danger', height: 40 },
        { class: 'bg-warning', height: 25 },
        { class: 'bg-primary', height: 60 },
      ],
    },
    {
      day: 'Sat',
      activities: [
        { class: 'bg-primary', height: 30 },
      ],
    },
    {
      day: 'Sun',
      activities: [
        { class: 'bg-secondary', height: 20 },
      ],
    },
  ];
  

  reminders = [
    { title: 'Eng - Vocabulary test', date: '24 Sep 2019, Friday' },
    { title: 'Eng - Send grammar homework', date: '29 Sep 2019, Wednesday' },
    { title: 'Spanish - Send essay', date: '05 Oct 2019, Monday' },
    { title: 'Spanish - Reading task', date: '10 Oct 2019, Thursday' },
  ];
  ngAfterViewInit() {
    const ctx = document.getElementById('learningChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          { label: 'Vocabulary', data: [3, 4, 3, 5, 2, 4, 6], backgroundColor: 'blue' },
          { label: 'Grammar', data: [2, 2, 1, 3, 1, 3, 2], backgroundColor: 'red' },
        ]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: true } },
        scales: { x: { beginAtZero: true }, y: { beginAtZero: true } }
      }
    });
  }
}
