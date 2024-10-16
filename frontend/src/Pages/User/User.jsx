import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { redirect, useLoaderData } from "react-router-dom";
import { setUserName, setLoginStatus, setUser } from "../../features/userProfile";
import Compte from "../../components/Compte/Compte";
import "./User.css";

export async function loader() {
  const token = window.sessionStorage.getItem("userId");
  const profile = await getProfileUser(token);
  if (!profile) {
    return redirect("/sign");
  }

  const response = await fetch("/datas/dataAccount.json");
  const donneesJSON = await response.json();

  return { profile, donneesJSON };
}

export default function User() {
  const { profile, donneesJSON } = useLoaderData();
  const dispatch = useDispatch();
  const [donnees, setDonnees] = useState(donneesJSON || []);
  const [formEdition, setFormEdition] = useState(false);
  
  const userProfile = useSelector((state) => state.user.user);

  useEffect(() => {
    if (profile) {
      dispatch(setUser(profile));
      dispatch(setLoginStatus(true));
      setDonnees(donneesJSON);
    }
  }, [profile, donneesJSON, dispatch]);

  const handleChange = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const updatedUser = { userName: data.userProfile };
    const isUpdated = await updateUser(updatedUser);

    if (isUpdated) {
      setFormEdition(false);
    } else {
      console.error("La mise à jour a échoué.");
    }
  };

  const updateUser = async (user) => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${window.sessionStorage.getItem("userId")}`,
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        dispatch(setUserName(user.userName));
        return true;
      } else {
        console.error("Échec de la mise à jour :", response.statusText);
        return false;
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour :", error);
      return false;
    }
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {userProfile && `${userProfile.firstName} ${userProfile.lastName}!`}
        </h1>

        {formEdition ? (
          <form id="formulaire" onSubmit={handleChange}>
            <ul className="form">
              <li>Edit user Info</li>
              <li>
                <label htmlFor="userProfile">User name:</label>
                <input type="text" id="userProfile" name="userProfile" />
              </li>
              <li>
                <label htmlFor="firstName">First name:</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={userProfile.firstName}
                  disabled
                />
              </li>
              <li>
                <label htmlFor="lastName">Last name:</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={userProfile.lastName}
                  disabled
                />
              </li>
              <li>
                <input className="edit-button" type="submit" value="Save" />
                <button
                  type="button"
                  className="edit-button"
                  onClick={() => setFormEdition(false)}
                >
                  Cancel
                </button>
              </li>
            </ul>
          </form>
        ) : (
          <button
            className="edit-button"
            onClick={() => setFormEdition(true)}
          >
            Edit Name
          </button>
        )}
      </div>

      <h2 className="sr-only">Accounts</h2>
      {donnees?.map((e, idx) => (
        <section className="account" key={`Account_${idx + 1}`}>
          <Compte donnees={e.Account} />
        </section>
      ))}
    </main>
  );
}

async function getProfileUser(token) {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const userDataJson = await response.json();
    if (response.ok) {
      return userDataJson.body;
    } else {
      console.log("Erreur lors de la récupération du profil utilisateur");
      return null;
    }
  } catch (error) {
    console.error("Une erreur s'est produite lors de la requête :", error);
    return null;
  }
}
