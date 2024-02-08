import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PostsService } from 'src/app/shared/services/posts.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'

// export interface ItemDetails {
//   title: string
//   description: string
// }

@Component({
  selector: 'app-posts-edit',
  templateUrl: './posts-edit.component.html',
  styleUrls: ['./posts-edit.component.scss']
})


export class PostsEditComponent implements OnInit {
  itemId;
  //  itemDetails:ItemDetails = {} as ItemDetails ;
  itemDetails = {};
  editForm: FormGroup;
  submitted: boolean;

  constructor(
    private PostsService: PostsService,
    private toaster: ToastrService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    
    this.buildEditForm();
    // get item data id
    this.route.params.subscribe(params => {
      //const idd=  String(params.id).slice(1,2);
      this.itemId = params.id;
      //  console.log(params)
      this.PostsService.getItem(params.id).subscribe(res => {
     //  this.itemDetails =res;
        /// this.editForm.patchValue(res);
         
        this.editForm.patchValue({
          title: params.title,
          description: params.description
          
        })
      });
    })

  }



  // to access inputs
  get f() { return this.editForm.controls }

  buildEditForm() {
      this.editForm = this.fb.group({
        title: ['', Validators.required],
        description: ['', Validators.required]
      })
    }

  // submit
  onSubmit() {
      this.submitted = true;
      // stop  if form invalid
      if(this.editForm.invalid) {
      return;
    }
    this.PostsService.update(this.editForm.value, this.itemId).subscribe(
      res => {
        this.toaster.success('Item Updated Successfully ', 'Success', { timeOut: 3000, closeButton: true, progressBar: true })
        this.router.navigate(['../admin/posts']);
      },
      err => {
        this.toaster.error(err.statusText, 'Erorr!', { timeOut: 3020, closeButton: true, progressBar: true });

      }

    )
  }
}
