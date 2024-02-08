import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NotesService } from 'src/app/shared/services/notes.service';
@Component({
  selector: 'app-note-show',
  templateUrl: './note-show.component.html',
  styleUrls: ['./note-show.component.scss']
})
export class NoteShowComponent {
  @Output() items= new EventEmitter <any> ()
  @Input() itemID:any;
  addForm : FormGroup;
  submitted:boolean;
  itemDetails={}
   constructor(
     private NotesService: NotesService,
     private toaster: ToastrService,
     private fb:FormBuilder,
     private router:Router,
   ) { }
 
   ngOnInit(): void {
     this.buildAddForm();
     this.getItemDetails(this.itemID);
   }
 
   onSubmit(id){
    
    if(id === ''){
      this.addItem(this.addForm.value)
    } else {
      this.UpdateItem(this.addForm.value,id)
    }
   }
 
   // Add new item
   addItem(data){
     this.NotesService.add(data).subscribe(
    res=>{
      this.toaster.success('Note Added Successfully ', 'Success', { timeOut: 3000, closeButton: true, progressBar: true })
      this.getItems()

    },
    err => {
      this.toaster.error(err.statusText, 'Erorr!', { timeOut: 3020, closeButton: true, progressBar: true });

    })
   }

   //Updata item 
   UpdateItem(data,id){
    this.NotesService.update(data,id).subscribe(
    res => {
     this.toaster.success('Note Added Successfully ', 'Success')
     this.getItems()
     
    },
   err => {
     this.toaster.error(err.statusText, 'Erorr!', { timeOut: 3020, closeButton: true, progressBar: true });

   })
  }

   // get items
   getItemDetails(id){
    this.NotesService.getItem(id).subscribe(res => {
      this.itemDetails=res
    })
   }
   // to access inputs
   get f(){ return this.addForm.controls}
   
   buildAddForm(){
     this.addForm = this.fb.group({
       id:'',
       title:[null,Validators.required],
       description:[null,Validators.required]
     })
   }

   // get update items after submit
   getItems(){
    this.NotesService.getAll().subscribe(res => {
      this.items.emit(res);
    })
   }
 }
 

