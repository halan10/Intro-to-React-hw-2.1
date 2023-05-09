import { CityCard } from "./CityCard";

export function CityList(props) {
  return (
    <>
      <h2>Information about cities of Ukraine</h2>
      {props.cities.map((c, i) => (
        <CityCard key={i} {...c} />
      ))}
    </>
  );
}
