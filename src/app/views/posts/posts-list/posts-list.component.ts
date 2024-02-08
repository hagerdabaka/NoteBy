import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/shared/services/posts.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr'


@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  items: any = [];

  constructor(
    private PostsService: PostsService,
    private modelService: NgbModal,
    private toaster: ToastrService,
  ) { }
  ngOnInit(): void {

    this.getAllP();
  }

  // get all posts

  getAllP() {
    this.PostsService.getAll().subscribe(res => {
      console.log(res);
      this.items = res;
    });
  }

  // Delete Item 
  deleteItem(model, id) {

    this.modelService.open(model).result.then(res => {

      this.PostsService.delete(id).subscribe(res => {
        this.toaster.success('Item deleted Successfully ', 'Success', { timeOut: 3000, closeButton: true, progressBar: true })
        this.getAllP();

      },
        err => {
          this.toaster.error(err.statusText, 'Erorr!', { timeOut: 3020, closeButton: true, progressBar: true });
        }
      );
    },
      reasson => {
        console.log(reasson)
      }
    )
  }

}

