import UsersAndRolesHeader from "./UsersAndRolesHeader";
import UsersTable from "./UsersTable";

export default function UsersAndRoles() {
  return (
    <section className="sm:mx-10 mx-2 my-5 mb-20">
      <UsersAndRolesHeader />
      <UsersTable />
    </section>
  );
}
