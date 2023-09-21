const React = require('react');

class Index extends React.Component {
    render() {
        const { pokemon } = this.props;
        return (
    <div>
      <h1>See All The Pokemon!</h1>
      <ul>
        {pokemon.map((p, i) => {
           return ( 
            <li key={i}>
            <a href={`/pokemon/${i}`}>{p.name}</a>
            <br></br>
            <img src={`${p.img}.jpg`}></img>
          </li>
           )

           })}
      </ul>
      <nav>
    <a href="/pokemon/new">Create a New Pokemon</a>
</nav>
    </div>
  );
};
}
module.exports = Index;