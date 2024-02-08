import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

 
  constructor(private http :HttpClient  ) { }

  // get notes data

  getAll(){
    return this.http.get( `${ environment.apiUrl }/notes`);
    // return this.http.get( this.API_URL + '/notes' ,this.httpOptions)
  }

    
  // Delete Item 

  delete(id){
    console.log(`${ environment.apiUrl }/notes/${id}`)
    return this.http.delete( `${ environment.apiUrl }/notes/${id}`)
  }
  
  // Add notes Item 

  add(data){
    return this.http.post(`${ environment.apiUrl }/notes`,data)
  }

  // getitem

  getItem(idd){
     let id =idd.slice(1,4)
    console.log(`${ environment.apiUrl }/notes/${id}`)
    return this.http.get(`${ environment.apiUrl }/notes/${id}`)
  }
  // update  item data
  
  update(data , id ){
    return this.http.put(`${ environment.apiUrl }/notes/${id}`,data)
  }
}


