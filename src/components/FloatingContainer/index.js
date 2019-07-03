import React from 'react';
import styles from './floatingContainer.module.css';
import globalStyles from '../../styles/globalStyles.module.css';

const FloatingContainer = props => (
  <div className={globalStyles.containerWrapper}>
    <h1 className={styles.title}>{props.title}</h1>
  </div>
);

export default FloatingContainer;
