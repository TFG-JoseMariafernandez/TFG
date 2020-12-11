import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { ValidadoresService } from '../../services/validadores.service';

@Component({
  selector: 'app-variable',
  templateUrl: './variable.component.html',
  styleUrls: ['./variable.component.css']
})

export class variableComponent implements OnInit {
  
  public Editor = DecoupledEditor;

    public onReady( editor ) {
        editor.ui.getEditableElement().parentElement.insertBefore(
            editor.ui.view.toolbar.element,
            editor.ui.getEditableElement()
        );
    }


   




  forma: FormGroup;


  constructor( private fb: FormBuilder,
               private validadores: ValidadoresService, ) { 
                 

    this.crearFormulario();
    //this.cargarDataAlFormulario();
    

  }
  get types(){
    return this.forma.get('types') as FormArray;
  }

  ngOnInit(): void {
  }

   
   domains  = [
    {value: 'One_of ', viewValue: 'One of'},
    {value: 'Of_type', viewValue: 'of type'},
    
  ];


  

  
    


  crearFormulario() {
 

    this.forma = this.fb.group({   
      name :  ['', Validators.required ],
      description: ['', Validators.required ],     
      units: ['', Validators.required ], 
      domain: ['', Validators.required ],  
      type: ['', Validators.required ],
      types: this.fb.array([]),
     
    });

  }

 



  aagregarTypes(){
    const TypesFormGroup  = this.fb.group({
      name: '',
      description: '',
      unit: '',
      
    });
    this.types.push(TypesFormGroup);
  }

  removerTypes(indice: number) {
    this.types.removeAt(indice);
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
