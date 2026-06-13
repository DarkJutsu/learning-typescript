export class Usuario {
  name: string;
  email: string;
  profession: string;
  trayectories: number;
  isActive: boolean;

  constructor(
    name: string,
    email: string,
    profession: string,
    trayectories: number,
    isActive: boolean,
  ) {
    this.name = name;
    this.email = email;
    this.profession = profession;
    this.trayectories = trayectories;
    this.isActive = isActive;
  }

  getName(): string {
    return this.name;
  }

  getProfile(): string {
    return `Name: ${this.name}, Email: ${this.email}, Role: ${this.profession}, Level: ${this.trayectories}, Active: ${this.isActive}`;
  }

  isStillActive(): boolean {
    return this.isActive;
  }
}
