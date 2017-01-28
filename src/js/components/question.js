import React from 'react';

class Question extends React.Component {
  constructor(props) {
    super(props);
  }

  renderOptions_ () {
    if (!this.props.question.options) {
      return;
    }
    const options = this.props.question.options.map(option => {
      return (
        <li key={option.id}>
          <label htmlFor="">
            <input type="radio" value={option.id} name="option" />
            {option.sentense}
          </label>
        </li>
      )
    });

    return (
      <ul className="list-unstyled">
        {options}
      </ul>
    )
  }

  renderButton_() {
    if (this.props.editionMode) {
      return;
    }
    return (
      <button type="button" className="btn btn-primary">Submit</button>
    )
  }

  render() {
    let question = this.props.question;

    return (
      <div>
        <h4>{question.sentense}</h4>

        {this.renderOptions_()}
        {this.renderButton_()}

      </div>
    )
  }
}

export default Question;
