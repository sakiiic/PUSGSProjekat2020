import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AviokompanijaService } from 'src/app/services/aviokompanija/aviokompanija.service';
import { AviokompanijaModel } from 'src/app/models/aviokompanija.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-aviocompany',
  templateUrl: './delete-aviocompany.component.html',
  styleUrls: ['./delete-aviocompany.component.scss']
})
export class DeleteAviocompanyComponent implements OnInit {

  dataSource: any;
  id: any;

  @ViewChild('messageblock', {static: true }) messageblock: ElementRef;
  constructor(public dialogRef: MatDialogRef<DeleteAviocompanyComponent>,
    public service: AviokompanijaService, 
    private activatedRoute: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.id = data.aviokompanijaId;
    }

  ngOnInit(): void {
  }

  openModal(){
    this.service.deleteAviocompany(this.id).subscribe();
    this.dialogRef.close();
    window.location.reload();
  }

  closeModal(){
    this.dialogRef.close();
  }

}
