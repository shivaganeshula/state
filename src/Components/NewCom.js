import  { Component } from 'react'

 class NewCom extends Component {
    styles ={
        fontStyle:'italic',
        color:'purple'
      };
    
    constructor(props) {
      super(props)
    
      this.state = {
         message:'Subcribe Channel',
         sub:'Subcribe'
      }
    }

    buttonChange =() => {
        this.setState({
            message:'Hit the bell icon',
            sub:'Subcribed'
        })
    }
  render() {
    return (
      <div>
        <h3 style={this.styles}>{this.state.message}</h3>
        <button onClick={this.buttonChange}>{this.state.sub}</button>
      </div>
    )
  }
}
export default NewCom
