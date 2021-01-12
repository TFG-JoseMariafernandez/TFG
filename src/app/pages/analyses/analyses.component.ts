import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { ValidadoresService } from '../../services/validadores.service';

@Component({
  selector: 'app-analyses',
  templateUrl: './analyses.component.html',
  styleUrls: ['./analyses.component.css']
})
export class AnalysesComponent implements OnInit {
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
  get analyses(){
    return this.forma.get('analyses') as FormArray;
  }
    get details(){
      return this.forma.get('details') as FormArray;
    }
  

  ngOnInit(): void {
  }

 

    


  crearFormulario() {

    this.forma = this.fb.group({   
     
    
      name: ['', Validators.required ],
     
      analyses: this.fb.array([]),
      
 
      
   
      details:this.fb.array([]),
      
    },{
      
    });

  }

 

  agregaranalyses(){
    const AnalysesFormGroup  = this.fb.group({
      id: '',
      analyses_type: '',
      details:this.details,
      data_spect:'',
      
     
    });
    this.analyses.push(AnalysesFormGroup);
  }
  agregarDetails(){
    const DetailsFormGroup  = this.fb.group({
      var: '',
      
      
     
    });
    this.details.push(DetailsFormGroup);
  }

  removerExperimenters(indice: number) {
    this.analyses.removeAt(indice);
  }
  removerDetails(indice: number) {
    this.details.removeAt(indice);
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
