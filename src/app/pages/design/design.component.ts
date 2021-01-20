import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { ValidadoresService } from '../../services/validadores.service';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {
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
  get parameters(){
    return this.forma.get('parameters') as FormArray;
  }
  get blocking(){
    return this.forma.get('blocking') as FormArray;
  }
  get groups(){
    return this.forma.get('groups') as FormArray;
  }
  get protocols(){
    return this.forma.get('protocols') as FormArray;
  }



  ngOnInit(): void {
  }

 

    


  crearFormulario() {

    this.forma = this.fb.group({   
      parameters: this.fb.array([]),
      blocking: this.fb.array([]),
      groups: this.fb.array([]),
      protocols: this.fb.array([]),
      type:  ['', Validators.required ],
      description: ['', Validators.required ],    
      Random :  ['', Validators.required ],
      des_assig: ['', Validators.required ],    
      
      
    });

  }

 

  agregarParameters(){
    const  parametersFormGroup  = this.fb.group({
      parameter: '',
      value: '',
      measured_in: '',
      description: '',
      
    });
    this.parameters.push( parametersFormGroup);
  }
  agregarBlocking(){
    const  BlockingFormGroup  = this.fb.group({
      name: '',
     
    });
    this.blocking.push(BlockingFormGroup);
  }
  agregarGroups(){
    const  GroupsFormGroup  = this.fb.group({
      name: '',
      size: '',
      
    });
    this.groups.push( GroupsFormGroup);
  }

  agregarProtocols(){
    const  ProtocolsFormGroup  = this.fb.group({
      name: '',
     
    });
    this.protocols.push( ProtocolsFormGroup);
  }

  removerParameters(indice: number) {
    this.parameters.removeAt(indice);
  }
  removerBlocking(indice: number) {
    this.blocking.removeAt(indice);
  }
  removerGroups(indice: number) {
    this.groups.removeAt(indice);
  }
  removerProtocols(indice: number) {
    this.protocols.removeAt(indice);
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
