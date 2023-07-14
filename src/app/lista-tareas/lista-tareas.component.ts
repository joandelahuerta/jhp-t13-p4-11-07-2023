import { Component, OnInit } from '@angular/core';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {
  tareas: any[] = [];

  constructor(private tareasService: TareasService) {}

  ngOnInit() {
    this.tareas = this.tareasService.getTareas();
  }
  //Marcar como completado con TareasService
  marcarComoCompletada(index: number) {
    this.tareasService.marcarComoCompletada(index);
  }
  //eliminar con servicio TareasService
  eliminarTarea(index: number) {
    this.tareasService.eliminarTarea(index);
  }
}
