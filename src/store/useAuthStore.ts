// Auth Store module interface
export interface AuthUser {
  id: number | string;
  name: string;
  email: string;
  role?: string;
}

export interface AuthState {
  user: AuthUser | null;
  isAuthenticated: boolean;
  setUser: (user: AuthUser | null) => void;
}

export const initialAuthState: AuthState = {
  user: null,
  isAuthenticated: false,
  setUser: () => {},
};

export default initialAuthState;
