(() => {
  const error = (msj: string): never => {
    throw new Error(msj);
  };

  error("Error en ti");
})();
