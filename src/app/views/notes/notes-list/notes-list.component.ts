import { Component } from '@angular/core';
import { NotesService } from 'src/app/shared/services/notes.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr'
@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent {
  items: any = [];
  itemID:any;

  constructor(
    private NotesService: NotesService,
    private modelService: NgbModal,
    private toaster: ToastrService,
  ) { }

  ngOnInit(): void {

    this.getAllP();
  }

  // get all posts

  getAllP() {
    this.NotesService.getAll().subscribe(res => {
      console.log(res);
      this.items = res;
    });
  }

  // Delete Item 
  deleteItem(model, id) {

    this.modelService.open(model).result.then(res => {

      this.NotesService.delete(id).subscribe(res => {
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


  // add or delete an note 

  open(content , id) {
		this.modelService.open(content,{ ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {	},
			(reason) => {
        console.log(reason);

			});
    this.itemID=id;
    console.log(id);

	}


  getUploadItems(updatesItems){

    this.items=updatesItems;
    this.modelService.dismissAll()
  }

}


