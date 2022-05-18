import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @ViewChild('closeAddExpenseModal') closeAddExpenseModal: any;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  navegar(index: string){
    console.log('click');
    this.route.navigateByUrl(`/${index}`);
    this.closeAddExpenseModal.nativeElement.click();
  }

}
