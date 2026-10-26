import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AgregarCarrito from './AgregarCarrito';

describe('Componente AgregarCarrito', () => {
  const mockItems = [
    { id: 1, Nombre: 'BMW M3', Precio: 25000, cantidad: 2, img: 'test.jpg' }
  ];

  it('4. Debe mostrar el aviso de carrito vacío cuando no hay elementos', () => {
    render(
      <AgregarCarrito 
        elementosCarrito={[]} 
        alEliminarDelCarrito={() => {}} 
        alActualizarCantidad={() => {}} 
        alVaciarCarrito={() => {}} 
        alSeguirComprando={() => {}} 
      />
    );
    expect(screen.getByText('Tu carrito está vacío')).toBeTruthy();
  });

  it('5. Debe renderizar los productos dentro de la tabla cuando existen elementos', () => {
    render(
      <AgregarCarrito 
        elementosCarrito={mockItems} 
        alEliminarDelCarrito={() => {}} 
        alActualizarCantidad={() => {}} 
        alVaciarCarrito={() => {}} 
        alSeguirComprando={() => {}} 
      />
    );
    expect(screen.getByText('BMW M3')).toBeTruthy();
  });

  it('6. Debe calcular el total del pedido correctamente', () => {
    render(
      <AgregarCarrito 
        elementosCarrito={mockItems} 
        alEliminarDelCarrito={() => {}} 
        alActualizarCantidad={() => {}} 
        alVaciarCarrito={() => {}} 
        alSeguirComprando={() => {}} 
      />
    );
    expect(screen.getByText('$50.000')).toBeTruthy();
  });

  it('7. Debe llamar a alEliminarDelCarrito al presionar el botón Eliminar', () => {
    const spyEliminar = jasmine.createSpy('alEliminarDelCarrito');
    render(
      <AgregarCarrito 
        elementosCarrito={mockItems} 
        alEliminarDelCarrito={spyEliminar} 
        alActualizarCantidad={() => {}} 
        alVaciarCarrito={() => {}} 
        alSeguirComprando={() => {}} 
      />
    );

    const btnEliminar = screen.getByRole('button', { name: /eliminar/i });
    fireEvent.click(btnEliminar);

    expect(spyEliminar).toHaveBeenCalledWith(1);
  });
});