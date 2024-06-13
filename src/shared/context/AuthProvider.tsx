import React, {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useContext,
} from 'react';
import { getCookie, removeCookie, setCookie } from '../utils/cookie';
import { useNavigate } from 'react-router-dom';

interface User {
  id: number;
  active: boolean;
  name: string;
  mobile: string;
  email: string;
  access_token: string;
}

interface AuthContextProps {
  user: User | null;
  setUser: (user: User | null) => void;
  loading: boolean;
  login: (userData: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const user = getCookie('auth_token');
    if (user) {
      try {
        setUser(JSON.parse(user));
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    }
    setLoading(false);
  }, []);

  const login = (userData: User) => {
    const user = JSON.stringify(userData);
    setCookie('auth_token', user, {
      path: '/',
      expires: new Date('9999-12-31T23:59:59.999Z'),
    });

    setUser(userData);
  };

  const logout = () => {
    removeCookie('auth_token');
    removeCookie('user');
    setUser(null);

    navigate('/auth/sign-in', { replace: true });
  };

  return (
    <AuthContext.Provider value={{ user, setUser, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
