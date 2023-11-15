import AllPostCards from "../components/AllPostCards";

export default function HomePage() {
  return (
    <div className=" w-full h-4/5 absolute bottom-0 left-0">
      <div className="w-4/5 md:w-full h-full mx-auto overflow-hidden overflow-y-scroll scroll-smooth">
        {/* Show all post */}
        <AllPostCards />
      </div>
    </div>
  );
}
