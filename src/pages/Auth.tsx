import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, LogIn, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import giraLogo from "@/assets/gira-ai-logo.png";

// ============================================
// API CONFIGURATION - ADD YOUR AUTH API HERE
// ============================================
const AUTH_CONFIG = {
  // Replace with your authentication API endpoint
  apiUrl: "YOUR_AUTH_API_ENDPOINT",
  
  // Add your API key if required
  apiKey: "YOUR_API_KEY",
  
  // Custom login function - modify this to match your API
  login: async (email: string, password: string): Promise<{ success: boolean; token?: string; error?: string }> => {
    // Example implementation - replace with your actual API call
    try {
      // const response = await fetch(`${AUTH_CONFIG.apiUrl}/login`, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     "Authorization": `Bearer ${AUTH_CONFIG.apiKey}`,
      //   },
      //   body: JSON.stringify({ email, password }),
      // });
      // const data = await response.json();
      // if (response.ok) {
      //   return { success: true, token: data.token };
      // }
      // return { success: false, error: data.message || "Login failed" };
      
      // Demo: Remove this and implement your actual API call above
      console.log("Login attempt with:", email);
      return { success: false, error: "API not configured. Please add your authentication API." };
    } catch (error) {
      return { success: false, error: "Network error. Please try again." };
    }
  },
};
// ============================================

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const result = await AUTH_CONFIG.login(email, password);
      
      if (result.success) {
        // Store the token if provided
        if (result.token) {
          localStorage.setItem("auth_token", result.token);
        }
        
        toast({
          title: "Success",
          description: "Login successful!",
        });
        
        // Navigate to home or dashboard after successful login
        navigate("/");
      } else {
        toast({
          title: "Login Failed",
          description: result.error || "Invalid credentials",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      <div className="absolute inset-0 circuit-pattern opacity-20" />
      
      {/* Back Button */}
      <Button
        variant="ghost"
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 gap-2 z-10"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Button>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="bg-card/80 backdrop-blur-xl border border-border rounded-2xl p-8">
          {/* Logo */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-background flex items-center justify-center ring-2 ring-primary/20 mb-4">
              <img src={giraLogo} alt="Gira AI Logo" className="w-14 h-14 object-cover rounded-full scale-[2.5]" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">Welcome Back</h1>
            <p className="text-muted-foreground text-sm mt-1">Sign in to your account</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background/50"
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-background/50 pr-10"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full gap-2"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              ) : (
                <LogIn className="w-4 h-4" />
              )}
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          {/* Info */}
          <p className="text-center text-xs text-muted-foreground mt-6">
            Contact admin if you need access to this platform
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
