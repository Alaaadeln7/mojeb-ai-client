import { Trash2 } from "lucide-react";

export default function ActionsClients() {
  return (
    <div className="flex justify-end items-center mt-5 gap-5">
      <button className="btn btn-primary">Add Client</button>
      <button className="btn btn-primary">
        <Trash2 className="size-5" /> Delete
      </button>
    </div>
  );
}
