import React from 'react';
import '../../assets/styles/styles.css';

import { Compte } from '../../Components/Compte/Compte';
import accountData from '../../mock/accountData';

const Profil = () => {
  let firstName = "Tony";
  let lastName = "Stark";
  let userName = "Iron";

  let isFormDisplayed = false;

  return (
    <div>
      <main className="main bg-dark">
        <div className="header2">
          <h1>Welcome back<br />{firstName} {lastName} {userName} !</h1>
          {isFormDisplayed ? (
            <>
              <form className="edit" onSubmit="">
                <input
                  class="input-profile"
                  value=""
                  onChange={(e) => setEditUserName(e.target.value)}
                  placeholder={userName}
                />
                <button className="edit-button" type='submit'>Save</button>
                <button className="edit-button cancel" onClick="">Cancel</button>
              </form>
            </>
          ) : (
            <button className="edit-button btn-edit2" onClick="">Edit UserName</button>
          )}
        </div>
        <h2 className="sr-only">Accounts</h2>

        {accountData.map((userAccount) => (
          <Compte
            key={userAccount.id}
            title={userAccount.title}
            amount={userAccount.amount}
            description={userAccount.description}
          />
        ))}
      </main>
    </div>
  );
};

export default Profil;