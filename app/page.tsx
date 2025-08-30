import Booking from "@/components/Booking/Booking";
import { ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
     <div className="grid grid-col-3">
        <div className="bg-blue-100">
          <Booking/>
        </div>
        <div className="col-span-2 bg-red-100 order-first md:order-last">
          Map
        </div>
     </div>
    </div>
  );
}
