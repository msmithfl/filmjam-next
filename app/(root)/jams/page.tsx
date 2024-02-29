import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Jams = () => {
  return (
    <div>
      <Button asChild>
        <Link href="/jams/create">Create Jam</Link>
      </Button>
    </div>
  );
};

export default Jams;
