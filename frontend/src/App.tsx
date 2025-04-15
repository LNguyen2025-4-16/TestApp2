import './App.css'

  const bandNames = [
    {name: "Dire Straits", members: "Mark Knopfler, Davide Knopfler, John Illsley, Pick Withers", formed: 1981},
    {name: "R.E.M", members: "Michael Stipe, Peter Buck, Mike Mills, Bill Berry", formed: 1977},
    {name: "Collective Soul", members: "Ed Roland, Dean Roland, David Heal, Ross Childress, Shane Evans", formed: 1992},
    {name: "Journey", members: "Steve Perry, Arnel Pineda, Neal Schon, Randy Jackson", formed: 1980}
  ];

function App() {
  return (
    <>
      <Welcome />
      <BandList />
    </>
  )
}

function Welcome(){
  return(
    <h1>My FAV 80's Bands!</h1>
  );
}

function BandList(){


  return(
    <>
    {
      bandNames.map((oneBand) => (//Map (Looping)
        <Band {...oneBand} />//Spreading
      ))
    }
    </>
  );
}

function Band({name, members, formed}: {name: string, members: string, formed: number}){
  return(
    <>
      <img />
      <h2>{name}</h2>
      <h2>Original Members: {members}</h2>
      <h2>Formed: {formed}</h2>
    </>
  );
}

export default App
