import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css'; // Si deseas usar un CSS module

export default function Home() {
  // Arrays de ejemplo para cada sección
  const accesoriosCabeza = [
    { id: 1, nombre: 'Gorro', img: '/accesorio1.png' },
    { id: 2, nombre: 'Sombrero', img: '/accesorio2.png' },
  ];

  const prendasSuperiores = [
    { id: 1, nombre: 'Camiseta', img: '/superior1.png' },
    { id: 2, nombre: 'Sudadera', img: '/superior2.png' },
    { id: 3, nombre: 'Chaqueta', img: '/superior3.png' },
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

  // Estados para cada categoría (usamos índices para controlar cuál está seleccionado)
  const [accesorioIndex, setAccesorioIndex] = useState(0);
  const [superiorIndex, setSuperiorIndex] = useState(0);
  const [inferiorIndex, setInferiorIndex] = useState(0);
  const [calcetinIndex, setCalcetinIndex] = useState(0);
  const [zapatoIndex, setZapatoIndex] = useState(0);

  // Estado para controlar el modal de vista previa
  const [showModal, setShowModal] = useState(false);

  // Función para cambiar de prenda (ejemplo: siguiente y anterior)
  const handleNext = (tipo) => {
    switch(tipo){
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
    switch(tipo){
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

  // Función para randomizar
  const handleRandomize = () => {
    setAccesorioIndex(Math.floor(Math.random() * accesoriosCabeza.length));
    setSuperiorIndex(Math.floor(Math.random() * prendasSuperiores.length));
    setInferiorIndex(Math.floor(Math.random() * prendasInferiores.length));
    setCalcetinIndex(Math.floor(Math.random() * calcetines.length));
    setZapatoIndex(Math.floor(Math.random() * zapatos.length));
  };

  // Para mostrar/ocultar modal
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.container}>
      <h1>Mi Avatar App</h1>

      {/* Botón Randomize en la parte superior */}
      <button onClick={handleRandomize} className={styles.randomButton}>
        Randomize
      </button>

      {/* Secciones para deslizar (accesorio, prenda superior, etc.) */}
      <div className={styles.section}>
        <h2>Accesorio de cabeza</h2>
        <div className={styles.carousel}>
          <button onClick={() => handlePrev('accesorio')}>{'<'}</button>
          <div className={styles.item}>
            <Image
              src={accesoriosCabeza[accesorioIndex].img}
              alt={accesoriosCabeza[accesorioIndex].nombre}
              width={100}
              height={100}
            />
            <p>{accesoriosCabeza[accesorioIndex].nombre}</p>
          </div>
          <button onClick={() => handleNext('accesorio')}>{'>'}</button>
        </div>
      </div>

      <div className={styles.section}>
        <h2>Prenda superior</h2>
        <div className={styles.carousel}>
          <button onClick={() => handlePrev('superior')}>{'<'}</button>
          <div className={styles.item}>
            <Image
              src={prendasSuperiores[superiorIndex].img}
              alt={prendasSuperiores[superiorIndex].nombre}
              width={100}
              height={100}
            />
            <p>{prendasSuperiores[superiorIndex].nombre}</p>
          </div>
          <button onClick={() => handleNext('superior')}>{'>'}</button>
        </div>
      </div>

      <div className={styles.section}>
        <h2>Prenda inferior</h2>
        <div className={styles.carousel}>
          <button onClick={() => handlePrev('inferior')}>{'<'}</button>
          <div className={styles.item}>
            <Image
              src={prendasInferiores[inferiorIndex].img}
              alt={prendasInferiores[inferiorIndex].nombre}
              width={100}
              height={100}
            />
            <p>{prendasInferiores[inferiorIndex].nombre}</p>
          </div>
          <button onClick={() => handleNext('inferior')}>{'>'}</button>
        </div>
      </div>

      <div className={styles.section}>
        <h2>Calcetines</h2>
        <div className={styles.carousel}>
          <button onClick={() => handlePrev('calcetin')}>{'<'}</button>
          <div className={styles.item}>
            <Image
              src={calcetines[calcetinIndex].img}
              alt={calcetines[calcetinIndex].nombre}
              width={100}
              height={100}
            />
            <p>{calcetines[calcetinIndex].nombre}</p>
          </div>
          <button onClick={() => handleNext('calcetin')}>{'>'}</button>
        </div>
      </div>

      <div className={styles.section}>
        <h2>Calzado</h2>
        <div className={styles.carousel}>
          <button onClick={() => handlePrev('zapato')}>{'<'}</button>
          <div className={styles.item}>
            <Image
              src={zapatos[zapatoIndex].img}
              alt={zapatos[zapatoIndex].nombre}
              width={100}
              height={100}
            />
            <p>{zapatos[zapatoIndex].nombre}</p>
          </div>
          <button onClick={() => handleNext('zapato')}>{'>'}</button>
        </div>
      </div>

      {/* Botón con el ícono de ojo (puedes usar un SVG o emoji) */}
      <button onClick={handleOpenModal} className={styles.viewButton}>
        👁
      </button>

      {/* Modal para mostrar la mezcla de productos seleccionados */}
      {showModal && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h2>Vista previa</h2>
            <div className={styles.previewGrid}>
              <Image
                src={accesoriosCabeza[accesorioIndex].img}
                alt={accesoriosCabeza[accesorioIndex].nombre}
                width={80}
                height={80}
              />
              <Image
                src={prendasSuperiores[superiorIndex].img}
                alt={prendasSuperiores[superiorIndex].nombre}
                width={80}
                height={80}
              />
              <Image
                src={prendasInferiores[inferiorIndex].img}
                alt={prendasInferiores[inferiorIndex].nombre}
                width={80}
                height={80}
              />
              <Image
                src={calcetines[calcetinIndex].img}
                alt={calcetines[calcetinIndex].nombre}
                width={80}
                height={80}
              />
              <Image
                src={zapatos[zapatoIndex].img}
                alt={zapatos[zapatoIndex].nombre}
                width={80}
                height={80}
              />
            </div>
            <button onClick={handleCloseModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}
