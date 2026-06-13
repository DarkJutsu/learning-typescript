import { Usuario } from './Usuario';

/**
 * Este archivo contiene pruebas unitarias para la clase Usuario utilizando Jest.
 * Se verifica que los métodos getName, getProfile e isStillActive funcionen correctamente.
 */
describe('Usuario class', () => {
  let usuario: Usuario;
  // Antes de cada prueba, se crea una instancia de Usuario con datos de ejemplo.
  beforeEach(() => {
    usuario = new Usuario(
      'John Doe',
      'john.doe@example.com',
      'Developer',
      5,
      true,
    );
  });

  /**
   * Prueba para verificar que el método getName devuelve el nombre del usuario correctamente.
   */
  test("should return the user's name", () => {
    // Se espera que el método getName devuelva 'John Doe'.
    expect(usuario.getName()).toBe('John Doe');
  });

  /**
   * Prueba para verificar que el método getProfile devuelve el perfil del usuario correctamente.
   */
  test("should return the user's profile", () => {
    // Se espera que el método getProfile devuelva el perfil completo del usuario.
    const expectedProfile =
      'Name: John Doe, Email: john.doe@example.com, Role: Developer, Level: 5, Active: true';
    expect(usuario.getProfile()).toBe(expectedProfile);
  });

  /**
   * Prueba para verificar que el método isStillActive devuelve el estado activo del usuario correctamente.
   */
  test("should return the user's active status", () => {
    // Se espera que el método isStillActive devuelva true.
    expect(usuario.isStillActive()).toBe(true);
  });
});
