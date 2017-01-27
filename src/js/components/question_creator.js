import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Question } from '../components';
import { Form } from '../components';
import { addQuestion } from '../actions';

class QuestionCreator extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    this.addNewQuestion('blablablabla');
  }

  createQuestionID(questions) {
    return questions.length;
  }

  addNewQuestion(text = '') {
    let question = Object.assign({}, this.props.question);
    let options = question.options.map(option => option);
    options.push({
      id: this.createQuestionID(options),
      sentense: text
    });

    question.options = options;

    this.props.addQuestion(question);
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit.bind(this)} />
        <Question question={this.props.question} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  // this object will be populated by the state.question later
  return {
    question: state.question
  };
}

function mapDispatchToProps(dispacth) {
  return bindActionCreators({ addQuestion: addQuestion }, dispacth);
}

export { QuestionCreator };
export default connect(mapStateToProps, mapDispatchToProps)(QuestionCreator);
