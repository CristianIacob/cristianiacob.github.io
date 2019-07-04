import React from 'react';
import styles from './floatingContainer.module.css';

const FloatingContainer = props => (
  <div className={styles.containerWrapper}>
    <h1 className={styles.title}>{props.title}</h1>
  </div>
);

export default FloatingContainer;
