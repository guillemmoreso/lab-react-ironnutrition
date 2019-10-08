import React, { Component } from 'react';
import './FoodBox.css';

export default class FoodBox extends Component {
  render() {
    const { name, calories, image, quantity, todaysFoodList } = this.props;

    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={image} alt="" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{name}</strong> <br />
                <small>{calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  value={quantity}
                  defaultValue="1"
                />
              </div>
              <div className="control">
                <button className="button is-info" onClick={todaysFoodList}>
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}