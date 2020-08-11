import { Component, OnInit, HostListener } from '@angular/core';
import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './colleges-in-india.component.html',
  styleUrls: ['./colleges-in-india.component.scss']
})
export class CollegesInIndiaComponent implements OnInit {
  collectionOfColleges: Array<any>;
  collegesOnView: Array<any>;
  @HostListener("window:scroll", [])
  onScroll(): void {
  if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
      // you're at the bottom of the page
      this.scrolledToBottom();
    }
  }

  constructor(public appService: AppserviceService) {}

  ngOnInit() {
    this.getCollegeData();
  }

  scrolledToBottom(): void {
    this.collegesOnView = [...this.collegesOnView, ...this.collectionOfColleges.splice(0, 10)];
  }

  getCollegeData(): void {
    this.appService.fetchCollegeData().subscribe((res) => {
      this.collectionOfColleges = res.colleges;
      this.collegesOnView = this.collectionOfColleges.splice(0, 10);
    });
  } 
}