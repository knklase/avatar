import React, { useState, useRef } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  // Datos para cada categoría
  const accesoriosCabeza = [
    { id: 1, nombre: 'Gorro', img: '/accesorio1.png' },
    { id: 2, nombre: 'Sombrero', img: '/accesorio2.png' },
    { id: 3, nombre: 'Diadema', img: '/accesorio3.png' },
  ];

  const prendasSuperiores = [
    { id: 1, nombre: 'Camiseta', img: '/superior1.png' },
    { id: 2, nombre: 'Sudadera', img: '/superior2.png' },
    { id: 3, nombre: 'Blusa', img: '/superior3.png' },
    { id: 4, nombre: 'Blusa', img: '/superior4.png' },
  ];

  const prendasInferiores = [
    { id: 1, nombre: 'Pantalón', img: '/inferior1.png' },
    { id: 2, nombre: 'Falda', img: '/inferior2.png' },
    { id: 3, nombre: 'Short', img: '/inferior3.png' },
    { id: 4, nombre: 'Short', img: '/inferior4.png' },
  ];

  const zapatos = [
    { id: 1, nombre: 'Zapatillas', img: '/zapatos1.png' },
    { id: 2, nombre: 'Botas', img: '/zapatos2.png' },
    { id: 3, nombre: 'Sandalias', img: '/zapatos3.png' },
    { id: 4, nombre: 'Sandalias', img: '/zapatos4.png' },
  ];

  // Estados para la selección en cada categoría
  const [accesorioIndex, setAccesorioIndex] = useState(0);
  const [superiorIndex, setSuperiorIndex] = useState(0);
  const [inferiorIndex, setInferiorIndex] = useState(0);
  const [zapatoIndex, setZapatoIndex] = useState(0);

  // Función para randomizar todas las selecciones
  const handleRandomize = () => {
    setAccesorioIndex(Math.floor(Math.random() * accesoriosCabeza.length));
    setSuperiorIndex(Math.floor(Math.random() * prendasSuperiores.length));
    setInferiorIndex(Math.floor(Math.random() * prendasInferiores.length));
    setZapatoIndex(Math.floor(Math.random() * zapatos.length));
  };

  // Función para agregar al carro
  const handleAddToCart = () => {
    // Lógica para agregar al carro
    console.log("Añadir al carro");
  };

  return (
    <div className={styles.container}>
      {/* Carruseles */}
      <div className={styles.composition}>
        {/* Accesorios */}
        <Carousel3 
          items={accesoriosCabeza} 
          selectedIndex={accesorioIndex} 
          onSelect={setAccesorioIndex}
          sizes={{
            leftWidth: 60,
            leftHeight: 60,
            centerWidth: 80,
            centerHeight: 80,
            rightWidth: 60,
            rightHeight: 60,
          }}
        />
        {/* Prenda superior */}
        <Carousel3 
          items={prendasSuperiores} 
          selectedIndex={superiorIndex} 
          onSelect={setSuperiorIndex}
          sizes={{
            leftWidth: 80,
            leftHeight: 60,
            centerWidth: 150,
            centerHeight: 150,
            rightWidth: 80,
            rightHeight: 80,
          }}
        />
        {/* Prenda inferior */}
        <Carousel3 
          items={prendasInferiores} 
          selectedIndex={inferiorIndex} 
          onSelect={setInferiorIndex}
          sizes={{
            leftWidth: 60,
            leftHeight: 100,
            centerWidth: 150,
            centerHeight: 210,
            rightWidth: 80,
            rightHeight: 100,
          }}
          extraClass={styles.inferiorCarousel}
        />
        {/* Calzado */}
        <Carousel3 
          items={zapatos} 
          selectedIndex={zapatoIndex} 
          onSelect={setZapatoIndex}
          sizes={{
            leftWidth: 60,
            leftHeight: 60,
            centerWidth: 80,
            centerHeight: 80,
            rightWidth: 60,
            rightHeight: 60,
          }}
        />
      </div>

      {/* Iconos en la parte inferior */}
      <footer className={styles.footer}>
        <div className={styles.iconContainer}>
          <button onClick={handleRandomize} className={styles.topButton}>
            <Image src="/shuffle.png" alt="Shuffle" width={32} height={32} />
          </button>
          <button onClick={handleAddToCart} className={styles.topButton}>
            <Image src="/cart.png" alt="Añadir al carro" width={32} height={32} />
          </button>
        </div>
      </footer>
    </div>
  );
}

// Componente Carousel3 modificado (sin cambios respecto a lo anterior)
function Carousel3({ items, selectedIndex, onSelect, sizes, extraClass }) {
  const containerRef = useRef(null);
  const [touchStartX, setTouchStartX] = useState(null);

  const defaultSizes = {
    leftWidth: 80,
    leftHeight: 80,
    centerWidth: 150,
    centerHeight: 150,
    rightWidth: 80,
    rightHeight: 80,
  };

  const { leftWidth, leftHeight, centerWidth, centerHeight, rightWidth, rightHeight } = sizes || defaultSizes;

  const handleTouchStart = (e) => {
    setTouchStartX(e.changedTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        onSelect((selectedIndex + 1) % items.length);
      } else {
        onSelect((selectedIndex - 1 + items.length) % items.length);
      }
    }
    setTouchStartX(null);
  };

  const leftIndex = (selectedIndex - 1 + items.length) % items.length;
  const rightIndex = (selectedIndex + 1) % items.length;

  const handlePrev = () => onSelect(leftIndex);
  const handleNext = () => onSelect(rightIndex);

  return (
    <div
      className={`${styles.carouselContainer} ${extraClass ? extraClass : ''}`}
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <button onClick={handlePrev} className={styles.carouselArrow}>
        ‹
      </button>
      <div className={styles.carouselImages}>
        <div className={styles.carouselItemSmall} onClick={() => onSelect(leftIndex)}>
          <Image
            src={items[leftIndex].img}
            alt={items[leftIndex].nombre}
            width={leftWidth}
            height={leftHeight}
            className={styles.itemImageSmall}
          />
        </div>
        <div className={styles.carouselItemLarge}>
          <Image
            src={items[selectedIndex].img}
            alt={items[selectedIndex].nombre}
            width={centerWidth}
            height={centerHeight}
            className={styles.itemImageLarge}
          />
        </div>
        <div className={styles.carouselItemSmall} onClick={() => onSelect(rightIndex)}>
          <Image
            src={items[rightIndex].img}
            alt={items[rightIndex].nombre}
            width={rightWidth}
            height={rightHeight}
            className={styles.itemImageSmall}
          />
        </div>
      </div>
      <button onClick={handleNext} className={styles.carouselArrow}>
        ›
      </button>
    </div>
  );
}
