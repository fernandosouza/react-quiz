import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Question extends React.Component {
  constructor(props) {
    super(props);
  }

  renderOptions_ () {
    const options = this.props.question.options.map(option => {
      return (
        <li key={option.id}>
          <label htmlFor="">
            <input type="radio" value={option.id} name="option" />
            {option.sentese}
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

  render() {
    let question = this.props.question;

    return (
      <div>
        <h4>{question.sentense}</h4>

        {this.renderOptions_()}

        <button type="button" className="btn btn-primary">Submit</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  // this object will be populated by the state.question later
  return {
    question: state.questionSelectd
  };
}

function mapDispatchToProps(dispacth) {
  return bindActionCreators({ answerQuestion: {} }, dispacth);
}

export { Question };
export default connect(mapStateToProps, mapDispatchToProps)(Question);
