import LoginForm from "@/components/auth/LoginForm";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Login = () => {
  useEffect(() => {
    const adminMessage = `Admin credentials\nEmail: admin@vvit.net\nPassword: 12345`;
    const facultyMessage = `Faculty credentials\nEmail: faculty@vvit.net\nPassword: 123456`;
    const studentMessage = `Student credentials\nEmail: nawaz@vvit.net\nPassword: 12345`;

    const message = `${adminMessage}\n\n${facultyMessage}\n\n${studentMessage}`;

    toast(message, {
      duration: 6000,
    });
  }, []);
  return (
    <section>
      <div className="grid items-center justify-center grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              Sign In
            </h2>
            <p className="mt-2 text-sm">
              Don&apos;t have an account?{" "}
              <Link
                to="/auth/signup"
                className="font-semibold transition-all duration-200 hover:underline"
              >
                Create a new account
              </Link>
            </p>
            <LoginForm />
          </div>
        </div>
        <div className="hidden h-screen md:block">
          <img
            className="object-cover w-full h-full mx-auto rounded-md"
            src="https://images.unsplash.com/photo-1630673245362-f69d2b93880e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="auth-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
