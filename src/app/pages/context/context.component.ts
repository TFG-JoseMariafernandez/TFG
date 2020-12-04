import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { ValidadoresService } from '../../services/validadores.service';

@Component({
  selector: 'app-context',
  templateUrl: './context.component.html',
  styleUrls: ['./context.component.css']
})
export class ContextComponent implements OnInit {
  public Editor = DecoupledEditor;

    public onReady( editor ) {
        editor.ui.getEditableElement().parentElement.insertBefore(
            editor.ui.view.toolbar.element,
            editor.ui.getEditableElement()
        );
    }


  forma: FormGroup;


  constructor( private fb: FormBuilder,
               private validadores: ValidadoresService ) { 

    this.crearFormulario();
    //this.cargarDataAlFormulario();
    

  }
  get experimenters(){
    return this.forma.get('experimenters') as FormArray;
  }

  ngOnInit(): void {
  }

 

    


  crearFormulario() {

    this.forma = this.fb.group({   
      absctract: this.fb.group({
        context: ['', Validators.required ],
        goal: ['', Validators.required ],
        method: ['', Validators.required ],   
        result: ['', Validators.required ],
        conclusions  : ['', Validators.required ],
      }), goal: this.fb.group({
        analyce: ['', Validators.required ],
        purpose_of: ['', Validators.required ],
        respect_to: ['', Validators.required ],   
        point_of_view: ['', Validators.required ],
        context_of  : ['', Validators.required ],
      }),
      experimenters: this.fb.array([])
      
    },{
     
    });

  }

 

  agregarExperimenters(){
    const ExperimentersFormGroup  = this.fb.group({
      name: '',
      email: '',
      organization: '',
      rol: '',
      task: ''
    });
    this.experimenters.push(ExperimentersFormGroup);
  }

  removerExperimenters(indice: number) {
    this.experimenters.removeAt(indice);
  }



  guardar() {
    console.log( this.forma.value );

    if ( this.forma.invalid ) {

      return Object.values( this.forma.controls ).forEach( control => {
        
        if ( control instanceof FormGroup ) {
          Object.values( control.controls ).forEach( control => control.markAsTouched() );
        } else {
          control.markAsTouched();
        }
        
        
      });
     
    }
    

    // Posteo de información
    this.forma.reset({
      nombre: 'Sin nombre'
    });

  }

}
