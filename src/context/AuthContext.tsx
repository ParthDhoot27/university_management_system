"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthState, User, LoginCredentials, UserRole } from '@/types';

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
  switchRole: (role: UserRole) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });

  useEffect(() => {
    const savedUser = localStorage.getItem('erp-user');
    if (savedUser) {
      try {
        const user = JSON.parse(savedUser);
        setAuthState({ user, isAuthenticated: true, isLoading: false });
      } catch {
        localStorage.removeItem('erp-user');
        setAuthState({ user: null, isAuthenticated: false, isLoading: false });
      }
    } else {
      setAuthState({ user: null, isAuthenticated: false, isLoading: false });
    }
  }, []);

  const login = async (credentials: LoginCredentials) => {
    setAuthState(prev => ({ ...prev, isLoading: true }));
    await new Promise(resolve => setTimeout(resolve, 500));
    const mockUsers: Record<UserRole, User> = {
      student: { id: '1', email: credentials.email, name: 'John Doe', role: 'student', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face' },
      professor: { id: '2', email: credentials.email, name: 'Dr. Jane Smith', role: 'professor', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face' },
      admin: { id: '3', email: credentials.email, name: 'Admin User', role: 'admin', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face' },
    };
    const user = mockUsers[credentials.role];
    localStorage.setItem('erp-user', JSON.stringify(user));
    setAuthState({ user, isAuthenticated: true, isLoading: false });
  };

  const logout = () => {
    localStorage.removeItem('erp-user');
    setAuthState({ user: null, isAuthenticated: false, isLoading: false });
  };

  const switchRole = (role: UserRole) => {
    if (authState.user) {
      const updatedUser = { ...authState.user, role } as User;
      localStorage.setItem('erp-user', JSON.stringify(updatedUser));
      setAuthState(prev => ({ ...prev, user: updatedUser }));
    }
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout, switchRole }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error('useAuth must be used within an AuthProvider');
  return context;
}


