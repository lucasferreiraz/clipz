import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() modalID: string = ''

  constructor(
    public modal: ModalService,
    public elementRef: ElementRef) {    
  }

  ngOnInit(): void {
    document.body.appendChild(this.elementRef.nativeElement)
  }

  closeModal($event: Event) {
    $event.preventDefault()

    this.modal.toggleModal(this.modalID)
  }

}
