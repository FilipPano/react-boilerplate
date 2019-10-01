import React from 'react';
import styles from './styles.module.scss';
import Button from 'components/Button';
import { increaseProductsQuantity } from 'services/products/product-quantity/actions';
import { connect } from 'react-redux';

const ReactBoilerPlateContainer = ({ productQuantity, increaseProductQuantity }) => (
  <div className={styles.container}>
    <div className={styles.heading}>
      React Boilerplate: {productQuantity}
    </div>

    <Button
      onClick={increaseProductQuantity}
      description="Increase quantity"
    />
  </div>
);

const mapStateToProps = state => ({
  productQuantity: state.productQuantity.productQuantity,
});

const mapActionsToProps = {
  increaseProductQuantity: increaseProductsQuantity,
};

export default connect(mapStateToProps, mapActionsToProps)(ReactBoilerPlateContainer);
