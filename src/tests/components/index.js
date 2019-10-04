import React from 'react';

class Button extends React.Component {

  handleClic = () => (false);

  render() {
    const { name } = this.props;

    return (
      <div className="divClassname">
        {
          name && <p>{name}</p>
        }
        <button onClick={this.handleClic}>Hola soy un boton</button>
      </div>
    );
  }
}

export default Button;