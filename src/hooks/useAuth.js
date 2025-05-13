import {
  useCheckAuthQuery,
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
} from "@/store/api/authApiSlice";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function useAuth() {
  const [register, { isLoading: isRegistering }] = useRegisterMutation();
  const [login, { isLoading: isLoggingIn }] = useLoginMutation();
  const { data: user, isLoading: isCheckingAuth } = useCheckAuthQuery();
  const [logout, { isLoading: logoutLoading }] = useLogoutMutation();
  const router = useRouter();
  const handleRegister = async (userData) => {
    try {
      const response = await register(userData).unwrap();
      toast.success("Registration Successfully");
      router.push("/");
    } catch (error) {
      toast.error(
        error?.data?.message || "Registration failed. Please try again."
      );
      console.error("Registration error:", error);
      throw error;
    }
  };

  const handleLogin = async (credentials) => {
    try {
      const response = await login(credentials).unwrap();
      console.log("Login successful:", response);
      toast.success("Login Successfully");
      router.push("/");
    } catch (error) {
      toast.error(error?.data?.message || "Login failed. Please try again.");
      console.error("Login error:", error);
      throw error;
    }
  };
  const handleLogout = async () => {
    const res = await logout();
    toast.success("logout successfully");
  };
  console.log(user);
  return {
    register: handleRegister,
    login: handleLogin,
    user,
    logout: handleLogout,
    loading: isRegistering || isLoggingIn || isCheckingAuth || logoutLoading,
  };
}
