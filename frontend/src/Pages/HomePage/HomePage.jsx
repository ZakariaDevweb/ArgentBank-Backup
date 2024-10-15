import React, { useState, useEffect } from "react";
import FeatureItem from "../../components/FeatureItem/FeatureItem";
import Hero from "../../components/Hero/Hero";
import "./HomePage.css";

export default function Home() {
  const [donnees, setDonnees] = useState(null);

  useEffect(() => {
    const chargerDonnees = async () => {
      try {
        const reponse = await fetch("/datas/data.json");

        if (!reponse.ok) {
          throw new Error("Erreur lors du chargement du fichier JSON");
        }
        const donneesJSON = await reponse.json();
        setDonnees(donneesJSON);
      } catch (erreur) {
        console.error("Erreur :", erreur);
      }
    };
    chargerDonnees();
  }, []);
  return (
    <main>
      <Hero/>
      <section className="features">
        <h2 className="sr-only">Features</h2>
        {donnees?.map((e, idx) => (
          <div key={idx} className="feature-item">
            <FeatureItem donnee={e.feature} />
          </div>
        ))}
      </section>
    </main>
  );
}
