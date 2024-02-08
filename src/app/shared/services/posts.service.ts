import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import{ HttpClient , HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  // private API_URL= environment.apiUrl;
 
  constructor(private http :HttpClient  ) { }

  // get posts data

  getAll(){
    return this.http.get( `${ environment.apiUrl }/posts`);
    // return this.http.get( this.API_URL + '/posts' ,this.httpOptions)
  }

    
  // Delete Item 

  delete(id){
    console.log(`${ environment.apiUrl }/posts/${id}`)
    return this.http.delete( `${ environment.apiUrl }/posts/${id}`)
  }
  
  // Add posts Item 

  add(data){
    return this.http.post(`${ environment.apiUrl }/posts`,data)
  }

  // getitem

  getItem(idd){
     let id =idd.slice(1,4)
    console.log(`${ environment.apiUrl }/posts/${id}`)
    return this.http.get(`${ environment.apiUrl }/posts/${id}`)
  }
  // update  item data
  
  update(data , id ){
    return this.http.put(`${ environment.apiUrl }/posts/${id}`,data)
  }
}
