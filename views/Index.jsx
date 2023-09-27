const React = require('react');


class Index extends React.Component {
    render() {
        const pokemon  = this.props.pokemon;
        return (
    <div>
      <h1>See All The Pokemon!</h1>
      <ul>
        {this.props.pokemon.map((p, i) => {
           return ( 
            <li key={i}>
            <a href={`/pokemon/${p.id}`}>{p.name}</a>
            <br></br>
            <img src={`${p.img}.jpg`}></img>
            <form action={`/pokemon/${p._id}?_method=DELETE`} method="POST">
              <input type="submit" value="DELETE"/>
            </form>
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