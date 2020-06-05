import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LetService } from 'src/app/services/let/let.service';

@Component({
  selector: 'app-delete-flight',
  templateUrl: './delete-flight.component.html',
  styleUrls: ['./delete-flight.component.scss']
})
export class DeleteFlightComponent implements OnInit {

  id: any;

  @ViewChild('messageblock', {static: true }) messageblock: ElementRef;
  constructor(public dialogRef: MatDialogRef<DeleteFlightComponent>,
    public service: LetService, @Inject(MAT_DIALOG_DATA) public data: any) {
      this.id = data.aviokompanijaId;
      console.log(this.id, "aaaaa")
    }
    
  ngOnInit(): void {
  }

  goBack() {
    window.history.back();
  }

  obrisiLet(){
    this.service.deleteLet(this.id).subscribe();
    this.dialogRef.close();
    window.location.reload();
  }

  closeModal(){
    this.dialogRef.close();
  }
}
