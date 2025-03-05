import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  // Datos para cada categoría
  const accesoriosCabeza = [
    { id: 1, nombre: 'Gorro', img: '/accesorio1.png' },
    { id: 2, nombre: 'Sombrero', img: '/accesorio2.png' },
    { id: 3, nombre: 'Diadema', img: '/accesorio3.png' },
    { id: 4, nombre: 'Casco', img: '/accesorio4.png' },
  ];

  const prendasSuperiores = [
    { id: 1, nombre: 'Camiseta', img: '/superior1.png' },
    { id: 2, nombre: 'Sudadera', img: '/superior2.png' },
    { id: 3, nombre: 'Blusa', img: '/superior3.png' },
  ];

  const prendasInferiores = [
    { id: 1, nombre: 'Pantalón', img: '/inferior1.png' },
    { id: 2, nombre: 'Falda', img: '/inferior2.png' },
    { id: 3, nombre: 'Short', img: '/inferior3.png' },
  ];

  const calcetines = [
    { id: 1, nombre: 'Calcetines negros', img: '/calcetines1.png' },
    { id: 2, nombre: 'Calcetines blancos', img: '/calcetines2.png' },
    { id: 3, nombre: 'Calcetines grises', img: '/calcetines3.png' },
  ];

  const zapatos = [
    { id: 1, nombre: 'Zapatillas', img: '/zapatos1.png' },
    { id: 2, nombre: 'Botas', img: '/zapatos2.png' },
    { id: 3, nombre: 'Sandalias', img: '/zapatos3.png' },
  ];

  // Estados para la prenda seleccionada en cada categoría
  const [accesorioIndex, setAccesorioIndex] = useState(0);
  const [superiorIndex, setSuperiorIndex] = useState(0);
  const [inferiorIndex, setInferiorIndex] = useState(0);
  const [calcetinIndex, setCalcetinIndex] = useState(0);
  const [zapatoIndex, setZapatoIndex] = useState(0);

  // Estado para el modal de vista previa
  const [showModal, setShowModal] = useState(false);

  // Randomiza la selección en cada categoría
  const handleRandomize = () => {
    setAccesorioIndex(Math.floor(Math.random() * accesoriosCabeza.length));
    setSuperiorIndex(Math.floor(Math.random() * prendasSuperiores.length));
    setInferiorIndex(Math.floor(Math.random() * prendasInferiores.length));
    setCalcetinIndex(Math.floor(Math.random() * calcetines.length));
    setZapatoIndex(Math.floor(Math.random() * zapatos.length));
  };

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className={styles.container}>
      {/* Encabezado con botones */}
      <header className={styles.header}>
        <button onClick={handleRandomize} className={styles.topButton}>
          Randomize
        </button>
        <button onClick={handleOpenModal} className={styles.topButton}>
          👁 Visualizar
        </button>
      </header>

      <h1 className={styles.title}>Mi Avatar App</h1>

      <div className={styles.sections}>
        {/* Carrusel para cada categoría */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Accesorio de cabeza</h2>
          <Carousel items={accesoriosCabeza} selectedIndex={accesorioIndex} onSelect={setAccesorioIndex} />
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Prenda superior</h2>
          <Carousel items={prendasSuperiores} selectedIndex={superiorIndex} onSelect={setSuperiorIndex} />
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Prenda inferior</h2>
          <Carousel items={prendasInferiores} selectedIndex={inferiorIndex} onSelect={setInferiorIndex} />
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Calcetines</h2>
          <Carousel items={calcetines} selectedIndex={calcetinIndex} onSelect={setCalcetinIndex} />
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Calzado</h2>
          <Carousel items={zapatos} selectedIndex={zapatoIndex} onSelect={setZapatoIndex} />
        </div>
      </div>

      {/* Modal de vista previa */}
      {showModal && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h2 className={styles.modalTitle}>Vista Previa</h2>
            <div className={styles.previewGrid}>
              <div className={styles.previewItem}>
                <Image
                  src={accesoriosCabeza[accesorioIndex].img}
                  alt={accesoriosCabeza[accesorioIndex].nombre}
                  width={80}
                  height={80}
                  className={styles.previewImage}
                />
                <p>{accesoriosCabeza[accesorioIndex].nombre}</p>
              </div>
              <div className={styles.previewItem}>
                <Image
                  src={prendasSuperiores[superiorIndex].img}
                  alt={prendasSuperiores[superiorIndex].nombre}
                  width={80}
                  height={80}
                  className={styles.previewImage}
                />
                <p>{prendasSuperiores[superiorIndex].nombre}</p>
              </div>
              <div className={styles.previewItem}>
                <Image
                  src={prendasInferiores[inferiorIndex].img}
                  alt={prendasInferiores[inferiorIndex].nombre}
                  width={80}
                  height={80}
                  className={styles.previewImage}
                />
                <p>{prendasInferiores[inferiorIndex].nombre}</p>
              </div>
              <div className={styles.previewItem}>
                <Image
                  src={calcetines[calcetinIndex].img}
                  alt={calcetines[calcetinIndex].nombre}
                  width={80}
                  height={80}
                  className={styles.previewImage}
                />
                <p>{calcetines[calcetinIndex].nombre}</p>
              </div>
              <div className={styles.previewItem}>
                <Image
                  src={zapatos[zapatoIndex].img}
                  alt={zapatos[zapatoIndex].nombre}
                  width={80}
                  height={80}
                  className={styles.previewImage}
                />
                <p>{zapatos[zapatoIndex].nombre}</p>
              </div>
            </div>
            <button onClick={handleCloseModal} className={styles.closeModalButton}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Componente Carousel con efecto "cover flow" básico:
// Los elementos se muestran en una fila con _scroll snap_
// y el elemento central (selectedIndex) aparece más grande.
function Carousel({ items, selectedIndex, onSelect }) {
  const containerRef = useRef(null);

  // Centra el elemento activo usando scrollIntoView
  useEffect(() => {
    const activeItem = containerRef.current.querySelector(`.${styles.activeItem}`);
    if (activeItem) {
      activeItem.scrollIntoView({ behavior: 'smooth', inline: 'center' });
    }
  }, [selectedIndex]);

  return (
    <div className={styles.carousel} ref={containerRef}>
      {items.map((item, index) => {
        const isActive = index === selectedIndex;
        return (
          <div
            key={item.id}
            className={`${styles.carouselItem} ${isActive ? styles.activeItem : ''}`}
            onClick={() => onSelect(index)}
          >
            <Image
              src={item.img}
              alt={item.nombre}
              width={isActive ? 150 : 80}
              height={isActive ? 150 : 80}
              className={styles.itemImage}
            />
          </div>
        );
      })}
    </div>
  );
}
