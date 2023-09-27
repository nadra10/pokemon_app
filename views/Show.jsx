const React = require('react')
class Show extends React.Component {
  render () {
   const p = this.props.p
    return (
      <div>
      <h1> Gotta Catch 'Em All </h1>
        <h2>{p.name}</h2>
        <img src={`${p.img}.jpg`} />
        <br/>
        <a href="/pokemon">Back</a>
      </div>
      );
     }
   }
  module.exports  = Show;