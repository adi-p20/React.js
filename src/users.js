export async function getUsers() {
  const userResponse = await fetch("http://localhost:4300/users");
  const users = await userResponse.json();
  return users;
}

export async function createUser(data) {
  console.log(data);
  const response = await fetch("http://localhost:4300/createUser", {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
}

export async function updateUser(data) {
  console.log(data);
  const response = await fetch(
    "http://localhost:4300/updateUser?" + "id=" + data.id,
    {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  const result = await response.json();
  return result;
}

export async function deleteUser(data) {
  console.log(data);
  const response = await fetch(
    "http://localhost:4300/deleteUser?id=" + data.id,
    {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const result = await response.json();
  return result;
}
