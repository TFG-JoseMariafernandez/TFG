import { ClassGetter, variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { ValidadoresService } from '../../services/validadores.service';

@Component({
  selector: 'app-hypotheses',
  templateUrl: './hypotheses.component.html',
  styleUrls: ['./hypotheses.component.css']
})

export class hypothesesComponent implements OnInit {
  
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
  get vars(){
    return this.forma.get('vars') as FormArray;
  }

  ngOnInit(): void {
  }

   
   variables  = [
    {value: 'var1', viewValue: 'Var1'},
    {value: 'var2', viewValue: 'Var2'},
    
  ];


  

  
    


  crearFormulario() {
 

    this.forma = this.fb.group({   
      name :  ['', Validators.required ],
      description: ['', Validators.required ],     
   
      type: ['', Validators.required ],
      vars: this.fb.array([]),     
    });

  }


  aagregarVar(){
    const VarFormGroup  = this.fb.group({
      name: '',
   
      
    });
    this.vars.push(VarFormGroup);
  }

  removerVar(indice: number) {
    this.vars.removeAt(indice);
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
