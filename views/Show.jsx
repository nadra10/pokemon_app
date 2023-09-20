const React = require('react')
class Show extends React.Component {
  render () {
   const pokemon = this.props.p
    return (
      <div>
      <h1> Show Page </h1>
        <h2>{p.name}</h2>
        <img src={`${p.img}.jpg`} />
      </div>
      );
     }
   }
  module.exports  = Show;