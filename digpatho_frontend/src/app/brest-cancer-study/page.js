"use client";
import ComplexNavbar from "../components/ComplexNavbar";
import { SimpleFooter } from "../components/Footer";
import PatientForm from "../components/PatientForm";

export default function BrestCancerStudy() {
  const tabs = [
    { label: "K167" },
    { label: "Test 2" },
    { label: "Test 3" },
    { label: "Test 4" },
  ];
  
   const title= "Brest Cancer Study"

  return (
    <div className="min-h-screen bg-[#F6F5F2]">
      <ComplexNavbar />
      <PatientForm tabs={tabs} title={title} />
      <SimpleFooter />
    </div>
  );
}