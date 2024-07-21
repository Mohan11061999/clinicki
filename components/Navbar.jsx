import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-violet-800 px-8 py-3 rounded-md">
      <Link
        className="text-white font-bold nav-link flex items-center gap-2"
        href="/"
      >
        <FaHome />
        ClinicK
      </Link>
      <Link className="bg-white p-2 nav-link rounded-md" href="/addTopic">
        Add Patient
      </Link>
    </nav>
  );
}
