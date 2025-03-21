"use client";

import AuthForm from "@/components/AuthForm";
import { signUpSchema } from "@/lib/validations";

const Page = () => (
  <AuthForm
    type="SIGN_UP"
    schema={signUpSchema}
    defaultValues={{
      fullName: "",
      email: "",
      universityRa: 0,
      universityDoc: "",
      password: "",
    }}
    onSubmit={() => {}}
  />
);
export default Page;
