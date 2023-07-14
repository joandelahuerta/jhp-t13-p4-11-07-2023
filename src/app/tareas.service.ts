import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private tareas: any[] = [];

  getTareas(): any[] {
    return this.tareas;
  }

  agregarTarea(tarea: any) {
    this.tareas.push(tarea);
  }

  marcarComoCompletada(index: number) {
    this.tareas[index].completada = true;
  }

  eliminarTarea(index: number) {
    this.tareas.splice(index, 1);
  }
}
