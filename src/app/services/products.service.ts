import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {AngularFireStorage} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private fs: AngularFirestore, private storage: AngularFireStorage) { }

  getAllProducts(){

    return this.fs.collection('Products').valueChanges();
  }


  addProduct(Name: string, Price: number, image: File){
    //upload img
    let ref = this.storage.ref('ProductsImages/' + image.name);
    ref.put(image).then(() => {
      ref.getDownloadURL().subscribe(ProductPath => {
        //add product
        this.fs.collection('Products').add({
          Name,
          Price,
          ProductPath
        })
      })
    })
  }

  getProducts(){
    return this.fs.collection('Products').snapshotChanges()
  }

  updateProducts(id, Price) {
    return this.fs.doc('Products/' + id).update({ Price })
  }

  deleteProducts(id){
    return this.fs.doc('Products/' + id).delete();
  }

}
