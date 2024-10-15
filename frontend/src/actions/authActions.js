const BASE_URL = 'http://localhost:3001/api/v1/user';

export async function loginUser(user) {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
  
    const responseData = await response.json();
  
    if (response.ok) {
      window.sessionStorage.setItem("userId", responseData.body.token);
      return true;
    } else {
      return false;
    }
  }
  
  export function showError() {
    const errorElement = document.querySelector(".error");
    if (errorElement) {
      errorElement.className = "error--visible";
      return true;
    }
    return false;
  }
  