import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from "../models/Category";
@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  API_URL = 'http://localhost:3001';

  //categroies methods
  constructor(private http: HttpClient) {}
  getCategories() {
    return this.http.get(`${this.API_URL}/`);
  }
  getCategory(id: string) {
    return this.http.get(`${this.API_URL}/${id}`);
  }
  deleteCategory(id: string) {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
  saveCategory(category: Category){
    return this.http.post(`${this.API_URL}/`, category);
  }
  updateCategory(id:string, updatedCategory: Category){
  return this.http.put(`${this.API_URL}/${id}`, updatedCategory);
  }
}
