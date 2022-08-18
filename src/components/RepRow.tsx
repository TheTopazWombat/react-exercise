import { Congressman } from "../types";

const RepRow = ({ congressman }: { congressman: Congressman }) => {
  const { name, link, party, state, type } = congressman;
  return (
    <div
      style={{
        margin: "2rem 0",
        border: "1px solid white",
        borderRadius: "5px",
        padding: "12px",
        backgroundColor: "#616a7d"
      }}
    >
      <h3 style={{ margin: "8px 0" }}>{name}</h3>
      <p style={{ margin: "4px 0", fontSize: 16 }}>
        {party} {type} from {state} -{" "}
        <a href={link} target="__blank" className="App-link">
          Website
        </a>
      </p>
    </div>
  );
};

export default RepRow;
