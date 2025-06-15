# Authentication App

A modern, responsive authentication application built with React, TypeScript, and Tailwind CSS. Features beautiful sign-up and sign-in forms with form validation and a clean, professional design.

## 🚀 Features

- **Modern UI Design**: Clean, professional interface with emerald and white color scheme
- **Responsive Layout**: Fully responsive design that works on desktop and mobile devices
- **Form Validation**: Real-time email and password validation with error messages
- **Password Security**: Password visibility toggle and minimum 8-character requirement
- **Social Authentication**: Google sign-in integration ready
- **Navigation**: Seamless navigation between sign-up and sign-in pages
- **Advertisement Cards**: Engaging promotional content with testimonials
- **Accessibility**: Proper form labels and keyboard navigation support

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Lucide React** - Beautiful, customizable icons
- **Vite** - Fast build tool and development server

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (version 16 or higher)
- npm or yarn package manager

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd authentication-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 📁 Project Structure

```
src/
├── components/
│   ├── SignUp.tsx          # Sign-up form component
│   └── SignIn.tsx          # Sign-in form component
├── App.tsx                 # Main application component with routing
├── main.tsx               # Application entry point
├── index.css              # Global styles and Tailwind imports
└── vite-env.d.ts          # Vite type definitions
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Emerald green (#10B981)
- **Secondary**: White (#FFFFFF)
- **Accent**: Gray tones for text and borders

### Form Validation
- **Email**: Real-time regex validation for proper email format
- **Password**: Minimum 8 characters required
- **Error Display**: Contextual error messages below invalid fields

### Responsive Design
- **Desktop**: Side-by-side layout with form and advertisement card
- **Mobile**: Stacked layout with form taking full width
- **Breakpoints**: Optimized for all screen sizes

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 📱 Pages

### Sign Up Page (`/signup`)
- Full name input field
- Email address with validation
- Password with show/hide toggle
- Google sign-in option
- Link to sign-in page
- Advertisement card with benefits

### Sign In Page (`/signin`)
- Email address with validation
- Password with show/hide toggle
- Remember me checkbox
- Forgot password link
- Google sign-in option
- Link to sign-up page
- Advertisement card with testimonial

## 🔐 Form Validation Rules

### Email Validation
- Must be a valid email format (using regex pattern)
- Real-time validation on input change
- Error message displays for invalid format

### Password Validation
- Minimum 8 characters required
- Real-time validation on input change
- Error message displays for insufficient length

## 🎯 Future Enhancements

- [ ] Backend integration for actual authentication
- [ ] Google OAuth implementation
- [ ] Password strength indicator
- [ ] Email verification flow
- [ ] Forgot password functionality
- [ ] User dashboard after successful login
- [ ] Form submission loading states
- [ ] Toast notifications for success/error messages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Created with ❤️ using modern web technologies.

## 🙏 Acknowledgments

- Icons provided by [Lucide React](https://lucide.dev/)
- Styling powered by [Tailwind CSS](https://tailwindcss.com/)
- Built with [Vite](https://vitejs.dev/) and [React](https://reactjs.org/)