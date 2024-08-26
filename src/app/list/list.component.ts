import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from "../details/details.component";
import { FilterPipeModule } from 'ngx-filter-pipe';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, FormsModule, DetailsComponent, FilterPipeModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  title = 'design-task1';

  ngOnInit(): void {
    
  }

  public isDisplay: boolean = false;
  public detailsData: any = {};
  isActive: boolean = false;
  // npx fliter-pipe
  userFilter: any = {};

  listObj: I_listObj = {
      id: null,
      name: null,
      standing: null,
      gmail: null,
      pno: null,
      cost: null,
      dsc: null,
      isActive: false
    };
  
  listData: I_listObj[] = [
    {
      id: 472,
      name: 'James uren',
      standing: 'good',
      gmail: 'James@gmail.com',
      pno: 34244533,
      cost: '$284.00',
      dsc: 'james kaenm',
      isActive: false
    },
    {
      id: 931,
      name: 'Ram mothen',
      standing: 'good',
      gmail: 'Ram@gmail.com',
      pno: null,
      cost: '$344.00',
      dsc: 'wem wrape',
      isActive: false
    },
    {
      id: 471,
      name: 'James uren',
      standing: 'good',
      gmail: 'James@gmail.com',
      pno: 56544533,
      cost: '$284.00',
      dsc: 'james kaenm',
      isActive: false
    },
    {
      id: 344,
      name: 'Owner Occupites',
      standing: 'good',
      gmail: 'oberndt@gmail.com',
      pno: 355464543,
      cost: '$284.00',
      dsc: 'Occupites',
      isActive: false
    },
    {
      id: 345,
      name: 'krishna',
      standing: 'good',
      gmail: 'krishna@gmail.com',
      pno: 24434345,
      cost: '$325',
      dsc: 'anything',
      isActive: false
    },
    {
      id: 346,
      name: 'Ram',
      standing: 'good',
      gmail: 'Ram@gmail.com',
      pno: 34553244,
      cost: '$390',
      dsc: 'anything new',
      isActive: false
    }

  ];

  // listObj: any = {
  //   id: '',
  //   name: '',
  //   cost: '',
  //   dsc: '',
  //   isActive: false
  // }

  onSave(){debugger;
    this.listData.push(this.listObj);
    this.onClose();
  }

  onClose(){
    this.listObj = {
      id: null,
      name: null,
      standing: null,
      gmail: null,
      pno: null,
      cost: null,
      dsc: null,
      isActive: false
    };
  }

  goToDetails(data: any){
    this.isDisplay = true;
    this.detailsData = data; 
    this.listData.map(function(x: any){

      if(data.id == x.id){
        x.isActive = true;
      }
      else{
        x.isActive = false;
      }

      return x;
    });
  }
}

export interface I_listObj {

  id: number|null,
  name: string|null,
  standing: string|null,
  gmail: string|null,
  pno: number|null,
  cost: string|null ,
  dsc: string|null,
  isActive: boolean
}
