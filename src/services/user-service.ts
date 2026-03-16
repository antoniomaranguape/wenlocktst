import type { CreateUserData, UpdateUserData, User } from "../interface/user.interface";
import type { PaginatedResponse } from "../interface/response.interface";

const STORAGE_KEY = "wenlock-users";

function loadUsersFromStorage(): User[] {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw) as User[];
  } catch {
    return [];
  }
}

function saveUsersToStorage(users: User[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}

function generateId() {
  return crypto.randomUUID ? crypto.randomUUID() : String(Date.now());
}

export const UserService = {
  getUsers: async (
    page = 1,
    limit = 15,
    search?: string
  ): Promise<PaginatedResponse<User>> => {
    let users = loadUsersFromStorage();

    if (search) {
      const term = search.toLowerCase();
      users = users.filter(
        (u) =>
          u.name.toLowerCase().includes(term) ||
          u.email.toLowerCase().includes(term) ||
          u.matricula.toLowerCase().includes(term)
      );
    }

    const totalItems = users.length;
    const totalPages = Math.max(1, Math.ceil(totalItems / limit));
    const currentPage = Math.min(page, totalPages);
    const start = (currentPage - 1) * limit;
    const items = users.slice(start, start + limit);

    return {
      items,
      meta: {
        totalItems,
        itemCount: items.length,
        itemsPerPage: limit,
        totalPages,
        currentPage,
      },
      links: {
        first: "",
        previous: "",
        next: "",
        last: "",
      },
    };
  },

  getUserById: async (id: string): Promise<User | null> => {
    const users = loadUsersFromStorage();
    const user = users.find((u) => u.id === id);
    return user ?? null;
  },

  createUser: async (userData: CreateUserData): Promise<User> => {
    const users = loadUsersFromStorage();
    const now = new Date().toISOString();
    const newUser: User = {
      id: generateId(),
      name: userData.name,
      email: userData.email,
      matricula: userData.matricula,
      isActive: true,
      createdAt: now,
      updatedAt: now,
    };

    users.push(newUser);
    saveUsersToStorage(users);

    return newUser;
  },

  updateUser: async (id: string, userData: UpdateUserData): Promise<User> => {
    const users = loadUsersFromStorage();
    const index = users.findIndex((u) => u.id === id);
    if (index === -1) {
      throw new Error("User not found");
    }

    const updated: User = {
      ...users[index],
      ...userData,
      updatedAt: new Date().toISOString(),
    };

    users[index] = updated;
    saveUsersToStorage(users);

    return updated;
  },

  deleteUser: async (id: string): Promise<void> => {
    const users = loadUsersFromStorage();
    const filtered = users.filter((u) => u.id !== id);
    saveUsersToStorage(filtered);
  },
};

