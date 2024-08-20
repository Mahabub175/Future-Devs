import login from "@/assets/images/login-bro.png";
import LoginForm from "@/components/AllSection/Login/LoginForm";
import Image from "next/image";

const SignIn = () => {
  return (
    <section className="bg-primaryLight/40 py-20 pt-32 lg:pt-44">
      <div className="lg:flex justify-center gap-20 rounded-xl items-center container mx-auto px-10">
        <div>
          <Image
            src={login}
            alt="login image"
            height
            width={500}
            className="rounded-xl mb-10 lg:mb-0"
          />
        </div>
        <div>
          <h2 className="text-4xl font-bold">Welcome back!</h2>
          <p className="text-base text-textColor font-semibold">
            Enter your Credentials to access your account
          </p>
          <LoginForm />
        </div>
      </div>
    </section>
  );
};

export default SignIn;
