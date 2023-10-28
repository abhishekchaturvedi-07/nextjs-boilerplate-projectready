import AdminNav from "@/components/nav/AdminNav";
import Link from "next/link";
export default function AdminLayout({ children }) {
  return (
    <>
      <AdminNav />
      {children}
    </>
  );
}
// app/dashboard/admin/page
