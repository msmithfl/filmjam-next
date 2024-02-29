import JamForm from "@/components/shared/JamForm";
import { auth } from "@clerk/nextjs";
import React from "react";

const UpdateJam = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper font-bold text-[28px] leading-[36px] md:text-[36px] md:leading-[44px] text-center sm:text-left">
          Create Jam
        </h3>
      </section>
      <div className="wrapper my-8">
        <JamForm userId={userId} type="Create" />
      </div>
    </>
  );
};

export default UpdateJam;
