import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PostsService } from 'src/app/shared/services/posts.service';
import { FormGroup, FormBuilder, Validators } from'@angular/forms';
import { Router} from '@angular/router'


@Component({
  selector: 'app-posts-add',
  templateUrl: './posts-add.component.html',
  styleUrls: ['./posts-add.component.scss']
})
export class PostsAddComponent  implements OnInit{

 addForm : FormGroup;
 submitted:boolean;
  constructor(
    private PostsService: PostsService,
    private toaster: ToastrService,
    private fb:FormBuilder,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.buildAddForm();
  }

  onSubmit(){
    this.submitted=true;
    // stop  if form invalid
    if(this.addForm.invalid){
      return;
    }
   this.PostsService.add(this.addForm.value).subscribe( 
    res=> {
      this.toaster.success('Item Added Successfully ', 'Success', { timeOut: 3000, closeButton: true, progressBar: true })
      this.router.navigate(['../admin/posts']);
    },
    err => {
      this.toaster.error(err.statusText, 'Erorr!', { timeOut: 3020, closeButton: true, progressBar: true });

    }
    
    )
  }

  // to access inputs
  get f(){ return this.addForm.controls}
  
  buildAddForm(){
    this.addForm = this.fb.group({
      title:[null,Validators.required],
      description:[null,Validators.required]
    })
  }
}
