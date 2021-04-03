export function fetchUsers(users) {
    return {
        type: "FETCH_USERS",
        payload: users
    };
}

export function createUsers(userData) {
    
    return {
        type: "CREATE_USERS",
        payload: userData
    }
} 

export function updateUsers(userData) {
    
    return {
        type: "UPDATE_USERS",
        payload: userData
    }
} 

export function deleteUsers(userData) {
    return {
        type: "DELETE_USERS",
        payload: userData
    }
} 