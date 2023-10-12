import * as styles from './BottomPanel.module.css';
import '@esri/calcite-components/dist/components/calcite-action';
import '@esri/calcite-components/dist/components/calcite-label';
import '@esri/calcite-components/dist/components/calcite-switch';
import { CalciteAction } from '@esri/calcite-components-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { setInfoModalOptions } from '../../store/modalSlice';

const BottomPanel = () => {
  const [visible, setVisible] = useState(true);
  const dispatch = useAppDispatch();

  const togglePanel = () => {
    setVisible(!visible);
  };

  const getHeader = () => {
    return (
      <div className={styles.actionsContainer}>
        <div className={styles.leftActionsContainer}>Hello ArcGIS Maps SDK for JavaScript</div>
        <div className={styles.rightActionsContainer}>
          <CalciteAction
            icon='information-f'
            scale='s'
            appearance='transparent'
            text=''
            onClick={() => dispatch(setInfoModalOptions({ visible: true }))}
          ></CalciteAction>
          <CalciteAction
            icon={visible ? 'chevronDown' : 'chevronUp'}
            scale='s'
            appearance='transparent'
            onClick={togglePanel}
            text=''
          ></CalciteAction>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      {getHeader()}
      <motion.div layout='size' animate={{ height: visible ? 'auto' : 0 }} style={{ overflow: 'hidden' }}>
        Some menu goes here
      </motion.div>
    </div>
  );
};

export default BottomPanel;
