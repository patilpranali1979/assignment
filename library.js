export const a=50

export function listBook(bookId) {
    console.log("book id is =", bookId);
    
}
 export class book {
    name ;
     author;
     constructor(name, author){
        this.name=name;
        this.author=author;
     }
      shoedetails(){
        console.log( this.name +" " + this.author);
        
      }
 }