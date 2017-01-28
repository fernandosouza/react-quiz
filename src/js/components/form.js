import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <input name="title" type="text" label="Write down the question" />
          <button className="btn btn-default">Submit</button>
        </form>
      </div>
    )
  }
}

export default Form;
