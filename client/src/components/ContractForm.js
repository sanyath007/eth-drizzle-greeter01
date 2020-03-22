import React, { Component } from 'react';

class ContractForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      greeting: ''
    };
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  }

  handleSubmit = e => {
    e.preventDefault();
    
    const { drizzle, drizzleState } = this.props;    
    const contract = drizzle.contracts.Greeter;

    contract.methods.set(this.state.greeting).send({ form: drizzleState.accounts[0] }).on(res =>{
      console.log(res);
    });
  }

  render() {
    return (
      <div className="row m-2 mt-3">
        <div className="col-md-12 d-flex justify-content-center">
          <form className="form-inline" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="">Greeting :</label>
              <input
                type="text"
                name="greeting"
                value={this.state.greeting}
                onChange={this.handleChange}
                className="form-control m-2"
              />
              <button type="submit" className="btn btn-primary">Send Greeting</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ContractForm
