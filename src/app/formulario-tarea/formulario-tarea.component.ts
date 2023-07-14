import { Component } from '@angular/core';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-formulario-tarea',
  templateUrl: './formulario-tarea.component.html',
  styleUrls: ['./formulario-tarea.component.css']
})
export class FormularioTareaComponent {
  nuevaTarea = {
    titulo: '',
    descripcion: ''
  };

  constructor(private tareasService: TareasService) {}
  //agregar tareas (de momento a medias)
  agregarTarea() {
    if (this.nuevaTarea.titulo && this.nuevaTarea.descripcion) {
      this.tareasService.agregarTarea({
        titulo: this.nuevaTarea.titulo,
        descripcion: this.nuevaTarea.descripcion,
        completada: false
      });
      //borrar campos
      this.nuevaTarea.titulo = '';
      this.nuevaTarea.descripcion = '';
    }
  }
}
