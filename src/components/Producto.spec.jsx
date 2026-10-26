import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Producto from './Producto';

describe('Componente Producto', () => {
  const productoMock = {
    id: 1,
    Nombre: 'BMW M3',
    Precio: 25000,
    img: 'src/assets/img/bmw_m3.jpg'
  };

  it('1. Debe renderizar el nombre y precio del vehículo', () => {
    render(<Producto producto={productoMock} onAddToCart={() => {}} />);
    expect(screen.getByText('BMW M3')).toBeTruthy();
    expect(screen.getByText('$25.000')).toBeTruthy();
  });

  it('2. Debe cargar la imagen del producto con su atributo src y alt', () => {
    render(<Producto producto={productoMock} onAddToCart={() => {}} />);
    const img = screen.getByRole('img');
    expect(img.getAttribute('src')).toBe(productoMock.img);
    expect(img.getAttribute('alt')).toBe(productoMock.Nombre);
  });

  it('3. Debe ejecutar onAddToCart al hacer clic en Añadir al Carrito', () => {
    const onAddToCartSpy = jasmine.createSpy('onAddToCart');
    render(<Producto producto={productoMock} onAddToCart={onAddToCartSpy} />);
    
    const boton = screen.getByRole('button', { name: /añadir al carrito/i });
    fireEvent.click(boton);

    expect(onAddToCartSpy).toHaveBeenCalledWith(productoMock);
  });
});