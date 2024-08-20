import login from "@/assets/images/signUp2.png";
import SignUpForm from "@/components/AllSection/SignUp/SignUpForm";
import Image from "next/image";

const SignUp = () => {
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
          <h2 className="text-4xl font-bold">Get Started Now!</h2>
          <p className="text-base text-textColor font-semibold">
            Register now to enjoy all the features
          </p>
          <SignUpForm />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
