import { ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <ClerkProvider>
    <SignedOut>
      <SignInButton />
    </SignedOut>
    <SignedIn>
      <UserButton />
    </SignedIn>
  </ClerkProvider>
      <h2>Testing       </h2>
    </div>
  );
}
