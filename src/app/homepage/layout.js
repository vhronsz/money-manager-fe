"use client"
import NavigationBar from "../component/NavigationBar";

export default function HomepageLayout({ children }) {
  return (
    <div className="flex flex-row ">
      <NavigationBar />
      <div className="w-4/5">
        {children}
      </div>
    </div>
  );
}