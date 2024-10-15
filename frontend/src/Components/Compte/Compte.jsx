import "./Compte.css";

export default function Compte({ donnees }) {
  const [h3, p, p2] = [
    donnees[0]?.h3 || "Default Title",
    donnees[1]?.p || "0.00",
    donnees[2]?.p2 || "Description not available",
  ];

  return (
    <>
      <div className="account-content-wrapper">
        <h3 className="account-title">{h3}</h3>
        <p className="account-amount">{p}</p>
        <p className="account-amount-description">{p2}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </>
  );
}
