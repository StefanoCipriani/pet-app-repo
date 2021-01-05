import { Component, Input, OnInit } from '@angular/core';
import { FoodModel } from 'src/app/model/FoodModel';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  item : FoodModel = null;
  constructor() { }

  ngOnInit() {
    this.item=null;

  }

  public visible = false;
  public visibleAnimate = false;

  public show(item : FoodModel) : void {
    console.log(item);
    this.item=item;
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

  public onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
    }
  }
}
