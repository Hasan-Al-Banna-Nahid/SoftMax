import Banner from "@/Components/(Home)/Banner/Banner";
import Diff from "@/Components/(Home)/Diff/Diff";
import Navbar from "@/Components/(Home)/Navbar/Navbar";
import Service from "@/Components/(Home)/Service/Service";
import Footer from "../Components/(Home)/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Banner />
      <Service />
      <Diff />
      <Footer />
    </main>
  );
}
