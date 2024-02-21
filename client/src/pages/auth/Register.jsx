import LoginForm from "@/components/auth/LoginForm";
import RegisterForm from "@/components/auth/RegisterForm";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section>
      <div className="grid items-center justify-center grid-cols-1 lg:grid-cols-2">
        <div className="hidden w-full h-full md:block">
          <img
            className="object-cover w-full h-full mx-auto rounded-md"
            src="https://images.unsplash.com/photo-1630673245362-f69d2b93880e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="auth-image"
          />
        </div>
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              Sign Up
            </h2>
            <p className="mt-2 text-sm">
              ALready have an account?{" "}
              <Link
                to="/auth/signin"
                className="font-semibold transition-all duration-200 hover:underline"
              >
                Sign In
              </Link>
            </p>
            <RegisterForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
