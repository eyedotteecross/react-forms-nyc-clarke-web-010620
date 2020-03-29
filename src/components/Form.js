import React from 'react';

class Form extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <form>
          <input
            type="text" 
            name="firstname"
            onChange={event => this.props.handleChange(event)}
            value={this.props.formData.firstName}
          />
          <input
            type="text" 
            name="lastname"
            onChange={event => this.props.handleChange(event)}
            value={this.props.formData.lastName}
          />
        </form>
      </div>
    )
  }
}

export default Form;