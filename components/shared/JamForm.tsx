"use client";

import { IJam } from "@/lib/database/models/jam.model";

type JamFormProps = {
  userId: string;
  type: "Create" | "Update";
  event?: IJam;
  eventId?: string;
};

const JamForm = ({ userId, type }: JamFormProps) => {
  return <div>JamForm {type}</div>;
};

export default JamForm;
