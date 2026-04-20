export class Animal {
  public race: string; // public: accesible desde cualquier parte.
  protected paws: number; // protecte: accesible desde la clase y sus subclases.
  private fins: boolean; // private: accesible solo desde la clase.

  constructor(race: string, paws: number, fins: boolean) {
    this.race = race;
    this.paws = paws;
    this.fins = fins;
  }

  public walk(): string {
    if (this.fins) return this.swim();
    return `The ${this.race} is walking with their ${this.paws} paws.`;
  }

  private swim(): string {
    return `The ${this.race} can only swim.`;
  }
}
