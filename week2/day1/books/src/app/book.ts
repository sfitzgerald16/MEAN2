export class Book {
  id: number;
  title: string;
  year: number;
  pages: number;
  author: string;
  publisher: string;

  constructor(generateId = true) {
    if (generateId) {
      this.id = Math.floor(Math.random() * 1000);
    }
  }
}

