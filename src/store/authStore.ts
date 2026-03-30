// src/store/authStore.ts

import { create } from "zustand";

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role?: "admin" | "student";
}

interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  verifyOTP: (email: string, otp: string) => Promise<void>;
  resetPassword: (email: string, newPassword: string) => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoggedIn: false,
  isLoading: false,

  login: async (email: string, password: string) => {
    set({ isLoading: true });
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Check if admin credentials from environment variables
      const adminEmail = import.meta.env.VITE_ADMIN_EMAIL || "admin@tmk.com";
      const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD || "admin123";
      const isAdmin = email === adminEmail && password === adminPassword;

      const user: User = {
        id: isAdmin ? "admin-001" : "1",
        email,
        name: email.split("@")[0],
        role: isAdmin ? "admin" : "student",
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
      };

      set({ user, isLoggedIn: true });
    } catch (error: unknown) {
      throw error instanceof Error ? error : new Error("Login failed");
    } finally {
      set({ isLoading: false });
    }
  },

  signup: async (name: string, email: string, password: string) => {
    set({ isLoading: true });
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // 👇 Use parameters
      console.log("Signing up with:", name, email, password);

      const user: User = {
        id: "1",
        email,
        name,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
      };

      set({ user, isLoggedIn: true });
    } catch (error: unknown) {
      throw error instanceof Error ? error : new Error("Signup failed");
    } finally {
      set({ isLoading: false });
    }
  },

  logout: () => {
    set({ user: null, isLoggedIn: false });
  },

  verifyOTP: async (email: string, otp: string) => {
    set({ isLoading: true });
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // 👇 Use parameters
      console.log("Verifying OTP:", email, otp);
    } catch (error: unknown) {
      throw error instanceof Error
        ? error
        : new Error("OTP verification failed");
    } finally {
      set({ isLoading: false });
    }
  },

  resetPassword: async (email: string, newPassword: string) => {
    set({ isLoading: true });
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // 👇 Use parameters
      console.log("Resetting password for:", email, newPassword);
    } catch (error: unknown) {
      throw error instanceof Error ? error : new Error("Password reset failed");
    } finally {
      set({ isLoading: false });
    }
  },
}));

// import { create } from "zustand";

// export interface User {
//   id: string;
//   email: string;
//   name: string;
//   avatar?: string;
//   role?: "admin" | "student";
// }

// interface AuthState {
//   user: User | null;
//   isLoggedIn: boolean;
//   isLoading: boolean;
//   login: (email: string, password: string) => Promise<void>;
//   signup: (name: string, email: string, password: string) => Promise<void>;
//   logout: () => void;
//   verifyOTP: (email: string, otp: string) => Promise<void>;
//   resetPassword: (email: string, newPassword: string) => Promise<void>;
// }

// export const useAuthStore = create<AuthState>((set) => ({
//   user: null,
//   isLoggedIn: false,
//   isLoading: false,

//   login: async (email: string, password: string) => {
//     set({ isLoading: true });
//     try {
//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 1500));

//       // Check if admin credentials
//       const isAdmin = email === "admin@tmk.com" && password === "admin123";

//       const user: User = {
//         id: isAdmin ? "admin-001" : "1",
//         email,
//         name: email.split("@")[0],
//         role: isAdmin ? "admin" : "student",
//         avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
//       };

//       set({ user, isLoggedIn: true });
//     } catch (error: unknown) {
//       throw error instanceof Error ? error : new Error("Login failed");
//     } finally {
//       set({ isLoading: false });
//     }
//   },

//   signup: async (name: string, email: string, password: string) => {
//     set({ isLoading: true });
//     try {
//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 1500));

//       // 👇 Use parameters
//       console.log("Signing up with:", name, email, password);

//       const user: User = {
//         id: "1",
//         email,
//         name,
//         avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
//       };

//       set({ user, isLoggedIn: true });
//     } catch (error: unknown) {
//       throw error instanceof Error ? error : new Error("Signup failed");
//     } finally {
//       set({ isLoading: false });
//     }
//   },

//   logout: () => {
//     set({ user: null, isLoggedIn: false });
//   },

//   verifyOTP: async (email: string, otp: string) => {
//     set({ isLoading: true });
//     try {
//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 1000));

//       // 👇 Use parameters
//       console.log("Verifying OTP:", email, otp);
//     } catch (error: unknown) {
//       throw error instanceof Error
//         ? error
//         : new Error("OTP verification failed");
//     } finally {
//       set({ isLoading: false });
//     }
//   },

//   resetPassword: async (email: string, newPassword: string) => {
//     set({ isLoading: true });
//     try {
//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 1500));

//       // 👇 Use parameters
//       console.log("Resetting password for:", email, newPassword);
//     } catch (error: unknown) {
//       throw error instanceof Error ? error : new Error("Password reset failed");
//     } finally {
//       set({ isLoading: false });
//     }
//   },
// }));

// import { create } from "zustand";

// export interface User {
//   id: string;
//   email: string;
//   name: string;
//   avatar?: string;
// }

// interface AuthState {
//   user: User | null;
//   isLoggedIn: boolean;
//   isLoading: boolean;
//   login: (email: string, password: string) => Promise<void>;
//   signup: (name: string, email: string, password: string) => Promise<void>;
//   logout: () => void;
//   verifyOTP: (email: string, otp: string) => Promise<void>;
//   resetPassword: (email: string, newPassword: string) => Promise<void>;
// }

// export const useAuthStore = create<AuthState>((set) => ({
//   user: null,
//   isLoggedIn: false,
//   isLoading: false,

//   login: async (email: string, password: string) => {
//     set({ isLoading: true });
//     try {
//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 1500));

//       // 👇 Use password (even if temporary)
//       console.log("Logging in with:", email, password);

//       const user: User = {
//         id: "1",
//         email,
//         name: email.split("@")[0],
//         avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
//       };

//       set({ user, isLoggedIn: true });
//     } catch (error: unknown) {
//       throw error instanceof Error ? error : new Error("Login failed");
//     } finally {
//       set({ isLoading: false });
//     }
//   },

//   signup: async (name: string, email: string, password: string) => {
//     set({ isLoading: true });
//     try {
//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 1500));

//       // 👇 Use parameters
//       console.log("Signing up with:", name, email, password);

//       const user: User = {
//         id: "1",
//         email,
//         name,
//         avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
//       };

//       set({ user, isLoggedIn: true });
//     } catch (error: unknown) {
//       throw error instanceof Error ? error : new Error("Signup failed");
//     } finally {
//       set({ isLoading: false });
//     }
//   },

//   logout: () => {
//     set({ user: null, isLoggedIn: false });
//   },

//   verifyOTP: async (email: string, otp: string) => {
//     set({ isLoading: true });
//     try {
//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 1000));

//       // 👇 Use parameters
//       console.log("Verifying OTP:", email, otp);
//     } catch (error: unknown) {
//       throw error instanceof Error
//         ? error
//         : new Error("OTP verification failed");
//     } finally {
//       set({ isLoading: false });
//     }
//   },

//   resetPassword: async (email: string, newPassword: string) => {
//     set({ isLoading: true });
//     try {
//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 1500));

//       // 👇 Use parameters
//       console.log("Resetting password for:", email, newPassword);
//     } catch (error: unknown) {
//       throw error instanceof Error ? error : new Error("Password reset failed");
//     } finally {
//       set({ isLoading: false });
//     }
//   },
// }));
