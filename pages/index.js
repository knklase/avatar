
import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  // Datos de ejemplo para cada sección
  const accesoriosCabeza = [
    { id: 1, nombre: 'Gorro', img: '/accesorio1.png' },
    { id: 2, nombre: 'Sombrero', img: '/accesorio2.png' },
  ];
  const prendasSuperiores = [
    { id: 1, nombre: 'Camiseta', img: '/superior1.png' },
    { id: 2, nombre: 'Sudadera', img: '/superior2.png' },
  ];
  const prendasInferiores = [
    { id: 1, nombre: 'Pantalón', img: '/inferior1.png' },
    { id: 2, nombre: 'Falda', img: '/inferior2.png' },
  ];
  const calcetines = [
    { id: 1, nombre: 'Calcetines negros', img: '/calcetines1.png' },
    { id: 2, nombre: 'Calcetines rojos', img: '/calcetines2.png' },
  ];
  const zapatos = [
    { id: 1, nombre: 'Zapatillas', img: '/zapatos1.png' },
    { id: 2, nombre: 'Botas', img: '/zapatos2.png' },
  ];

  // Estados para cada categoría
  const [accesorioIndex, setAccesorioIndex] = useState(0);
  const [superiorIndex, setSuperiorIndex] = useState(0);
  const [inferiorIndex, setInferiorIndex] = useState(0);
  const [calcetinIndex, setCalcetinIndex] = useState(0);
  const [zapatoIndex, setZapatoIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  // Variables para detectar swipe en móviles
  const [touchStartX, setTouchStartX] = useState(null);

  const handleTouchStart = (e) => {
    setTouchStartX(e.changedTouches[0].clientX);
  };

  const handleTouchEnd = (e, tipo) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? handleNext(tipo) : handlePrev(tipo);
    }
    setTouchStartX(null);
  };

  const handleNext = (tipo) => {
    switch (tipo) {
      case 'accesorio':
        setAccesorioIndex((prev) => (prev + 1) % accesoriosCabeza.length);
        break;
      case 'superior':
        setSuperiorIndex((prev) => (prev + 1) % prendasSuperiores.length);
        break;
      case 'inferior':
        setInferiorIndex((prev) => (prev + 1) % prendasInferiores.length);
        break;
      case 'calcetin':
        setCalcetinIndex((prev) => (prev + 1) % calcetines.length);
        break;
      case 'zapato':
        setZapatoIndex((prev) => (prev + 1) % zapatos.length);
        break;
      default:
        break;
    }
  };

  const handlePrev = (tipo) => {
    switch (tipo) {
      case 'accesorio':
        setAccesorioIndex((prev) => (prev - 1 + accesoriosCabeza.length) % accesoriosCabeza.length);
        break;
      case 'superior':
        setSuperiorIndex((prev) => (prev - 1 + prendasSuperiores.length) % prendasSuperiores.length);
        break;
      case 'inferior':
        setInferiorIndex((prev) => (prev - 1 + prendasInferiores.length) % prendasInferiores.length);
        break;
      case 'calcetin':
        setCalcetinIndex((prev) => (prev - 1 + calcetines.length) % calcetines.length);
        break;
      case 'zapato':
        setZapatoIndex((prev) => (prev - 1 + zapatos.length) % zapatos.length);
        break;
      default:
        break;
    }
  };

  const handleRandomize = () => {
    setAccesorioIndex(Math.floor(Math.random() * accesoriosCabeza.length));
    setSuperiorIndex(Math.floor(Math.random() * prendasSuperiores.length));
    setInferiorIndex(Math.floor(Math.random() * prendasInferiores.length));
    setCalcetinIndex(Math.floor(Math.random() * calcetines.length));
    setZapatoIndex(Math.floor(Math.random() * zapatos.length));
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.container}>
      {/* Encabezado con botones Randomize y Visualizar */}
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
        {/* Sección: Accesorio de cabeza */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Accesorio de cabeza</h2>
          <div
            className={styles.carousel}
            onTouchStart={handleTouchStart}
            onTouchEnd={(e) => handleTouchEnd(e, 'accesorio')}
          >
            <button onClick={() => handlePrev('accesorio')} className={styles.navButton}>
              ‹
            </button>
            <div className={styles.item}>
              <Image
                src={accesoriosCabeza[accesorioIndex].img}
                alt={accesoriosCabeza[accesorioIndex].nombre}
                width={120}
                height={120}
                className={styles.avatarImage}
              />
              <p className={styles.itemText}>{accesoriosCabeza[accesorioIndex].nombre}</p>
            </div>
            <button onClick={() => handleNext('accesorio')} className={styles.navButton}>
              ›
            </button>
          </div>
        </div>

        {/* Sección: Prenda superior */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Prenda superior</h2>
          <div
            className={styles.carousel}
            onTouchStart={handleTouchStart}
            onTouchEnd={(e) => handleTouchEnd(e, 'superior')}
          >
            <button onClick={() => handlePrev('superior')} className={styles.navButton}>
              ‹
            </button>
            <div className={styles.item}>
              <Image
                src={prendasSuperiores[superiorIndex].img}
                alt={prendasSuperiores[superiorIndex].nombre}
                width={120}
                height={120}
                className={styles.avatarImage}
              />
              <p className={styles.itemText}>{prendasSuperiores[superiorIndex].nombre}</p>
            </div>
            <button onClick={() => handleNext('superior')} className={styles.navButton}>
              ›
            </button>
          </div>
        </div>

        {/* Sección: Prenda inferior */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Prenda inferior</h2>
          <div
            className={styles.carousel}
            onTouchStart={handleTouchStart}
            onTouchEnd={(e) => handleTouchEnd(e, 'inferior')}
          >
            <button onClick={() => handlePrev('inferior')} className={styles.navButton}>
              ‹
            </button>
            <div className={styles.item}>
              <Image
                src={prendasInferiores[inferiorIndex].img}
                alt={prendasInferiores[inferiorIndex].nombre}
                width={120}
                height={120}
                className={styles.avatarImage}
              />
              <p className={styles.itemText}>{prendasInferiores[inferiorIndex].nombre}</p>
            </div>
            <button onClick={() => handleNext('inferior')} className={styles.navButton}>
              ›
            </button>
          </div>
        </div>

        {/* Sección: Calcetines */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Calcetines</h2>
          <div
            className={styles.carousel}
            onTouchStart={handleTouchStart}
            onTouchEnd={(e) => handleTouchEnd(e, 'calcetin')}
          >
            <button onClick={() => handlePrev('calcetin')} className={styles.navButton}>
              ‹
            </button>
            <div className={styles.item}>
              <Image
                src={calcetines[calcetinIndex].img}
                alt={calcetines[calcetinIndex].nombre}
                width={120}
                height={120}
                className={styles.avatarImage}
              />
              <p className={styles.itemText}>{calcetines[calcetinIndex].nombre}</p>
            </div>
            <button onClick={() => handleNext('calcetin')} className={styles.navButton}>
              ›
            </button>
          </div>
        </div>

        {/* Sección: Calzado */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Calzado</h2>
          <div
            className={styles.carousel}
            onTouchStart={handleTouchStart}
            onTouchEnd={(e) => handleTouchEnd(e, 'zapato')}
          >
            <button onClick={() => handlePrev('zapato')} className={styles.navButton}>
              ‹
            </button>
            <div className={styles.item}>
              <Image
                src={zapatos[zapatoIndex].img}
                alt={zapatos[zapatoIndex].nombre}
                width={120}
                height={120}
                className={styles.avatarImage}
              />
              <p className={styles.itemText}>{zapatos[zapatoIndex].nombre}</p>
            </div>
            <button onClick={() => handleNext('zapato')} className={styles.navButton}>
              ›
            </button>
          </div>
        </div>
      </div>

      {/* Modal de vista previa */}
      {showModal && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h2 className={styles.modalTitle}>Vista previa</h2>
            <div className={styles.previewGrid}>
              <Image
                src={accesoriosCabeza[accesorioIndex].img}
                alt={accesoriosCabeza[accesorioIndex].nombre}
                width={80}
                height={80}
                className={styles.avatarImage}
              />
              <Image
                src={prendasSuperiores[superiorIndex].img}
                alt={prendasSuperiores[superiorIndex].nombre}
                width={80}
                height={80}
                className={styles.avatarImage}
              />
              <Image
                src={prendasInferiores[inferiorIndex].img}
                alt={prendasInferiores[inferiorIndex].nombre}
                width={80}
                height={80}
                className={styles.avatarImage}
              />
              <Image
                src={calcetines[calcetinIndex].img}
                alt={calcetines[calcetinIndex].nombre}
                width={80}
                height={80}
                className={styles.avatarImage}
              />
              <Image
                src={zapatos[zapatoIndex].img}
                alt={zapatos[zapatoIndex].nombre}
                width={80}
                height={80}
                className={styles.avatarImage}
              />
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
