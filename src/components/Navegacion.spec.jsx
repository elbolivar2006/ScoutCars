import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navegacion from './Navegacion';

describe('Componente Navegacion', () => {
  it('8. Debe mostrar todos los enlaces del menú principal', () => {
    render(<Navegacion cambiarVista={() => {}} vista="inicio" totalItems={0} />);
    expect(screen.getByText('Inicio')).toBeTruthy();
    expect(screen.getByText('Productos')).toBeTruthy();
    expect(screen.getByText('Mi Cuenta')).toBeTruthy();
  });

  it('9. Debe mostrar el badge con el total de items recibido por props', () => {
    render(<Navegacion cambiarVista={() => {}} vista="inicio" totalItems={3} />);
    expect(screen.getByText('3')).toBeTruthy();
  });

  it('10. Debe invocar cambiarVista con la sección seleccionada al hacer clic', () => {
    const spyCambiarVista = jasmine.createSpy('cambiarVista');
    render(<Navegacion cambiarVista={spyCambiarVista} vista="inicio" totalItems={0} />);

    const enlaceProductos = screen.getByText('Productos');
    fireEvent.click(enlaceProductos);

    expect(spyCambiarVista).toHaveBeenCalledWith('productos');
  });
});