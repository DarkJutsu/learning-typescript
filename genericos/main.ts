class Box<T> {
  private content: T;

  constructor(content: T) {
    this.content = content;
  }

  public getContent() {
    return this.content;
  }
}

let box = new Box<string>('My books');
console.log(box.getContent());
