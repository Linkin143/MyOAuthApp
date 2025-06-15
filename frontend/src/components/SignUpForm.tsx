import axios from 'axios';
import { ArrowRight, Eye, EyeOff, Lock, Mail, User } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 8;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear errors when user starts typing
    if (name === 'email' || name === 'password') {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }

    // Validate on change
    if (name === 'email' && value && !validateEmail(value)) {
      setErrors(prev => ({ ...prev, email: 'Please enter a valid email address' }));
    }
    if (name === 'password' && value && !validatePassword(value)) {
      setErrors(prev => ({ ...prev, password: 'Password must be at least 8 characters long' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate before submission
    const newErrors = {
      email: !validateEmail(formData.email) ? 'Please enter a valid email address' : '',
      password: !validatePassword(formData.password) ? 'Password must be at least 8 characters long' : '',
    };

    setErrors(newErrors);

    if (!newErrors.email && !newErrors.password) {
      console.log('Form submitted:');
      // Here you would typically handle the actual form submission to your backend
      try {
        await axios.post('https://myoauthapp.onrender.com/api/auth/signup', formData, { withCredentials: true });
        navigate('/');
        setTimeout(() => {
          alert("Registration Completed");
        }, 1000);

      } catch (error) {

        console.log(error);
        console.log("SignUp Failed");
      }


    }
  };


  const handleGoogleClick = () => {

    try {

      window.location.href = "https://myoauthapp.onrender.com/api/auth/google";

    } catch (error) {
      console.log(error);
      console.log("SignUp Failed");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-6">
      <div className="flex flex-col md:flex-row max-w-5xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Sign Up Form */}
        <div className="w-full md:w-1/2 p-8 md:p-10">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Create an Account</h1>
            <p className="text-gray-600">Join us today and get access to all features</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-3 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all`}
                  placeholder="Enter your email address"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-10 py-3 border ${errors.password ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all`}
                  placeholder="Create a password"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-400 hover:text-gray-600 focus:outline-none cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-300 flex items-center justify-center cursor-pointer"
            >
              Sign Up <ArrowRight className="ml-2 h-5 w-5" />
            </button>

            <div className="relative flex items-center justify-center my-6">
              <div className="border-t w-full border-gray-300"></div>
              <span className="bg-white px-3 text-sm text-gray-500 absolute">or continue with</span>
            </div>

            <button onClick={handleGoogleClick}
              type="button"
              className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-all duration-300 flex items-center justify-center cursor-pointer"
            >
              <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
                <path d="M1 1h22v22H1z" fill="none" />
              </svg>
              Sign up with Google
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <button
                onClick={() => navigate('/')}
                className="text-emerald-600 hover:text-emerald-700 font-medium focus:outline-none focus:underline transition-all cursor-pointer"
              >
                Sign In
              </button>
            </p>
          </div>
        </div>

        {/* Advertisement Card */}
        <div className="hidden md:block w-1/2 bg-gradient-to-br from-emerald-500 to-emerald-700 p-10 text-white">
          <div className="h-full flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-6">Join Our Community Today!</h2>
              <p className="text-emerald-100 mb-8 text-lg">
                Get access to exclusive features and content when you sign up. Start your journey with us!
              </p>
              <ul className="space-y-4">
                {['Premium Content Access', 'Community Support', 'Regular Updates', 'Priority Customer Service'].map(
                  (benefit, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="h-6 w-6 mr-2 text-emerald-300 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="mt-auto">
              <div className="p-4 bg-green-950 bg-opacity-10 rounded-lg backdrop-blur-sm">
                <p className="text-emerald-100 italic">
                  "This platform has completely transformed how I work. The features are intuitive and powerful!"
                </p>
                <div className="mt-4 flex items-center">
                  <div className="h-10 w-10 rounded-full bg-emerald-300 flex items-center justify-center text-emerald-800 font-bold">
                    JS
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">Jane Smith</p>
                    <p className="text-xs text-emerald-200">Product Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;