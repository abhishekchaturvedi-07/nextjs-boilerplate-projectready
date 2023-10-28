export default function Loading() {
  return (
    <div className="d-flex justify-content-center align-items-center vh100 text-danger">
      LOADING
    </div>
  );
}
// using session 'loading' status
// TopNav
// return (
//   <nav className="nav shadow p-2 justify-content-between mb-3">
//     <Link className="nav-link" href="/">
//       🛒 NEXTCOM
//     </Link>
//     {status === "authenticated" ? (
//       <div className="d-flex">{/* */}</div>
//     ) : status === "loading" ? (
//       <div className="d-flex">
//         <a className="nav-link text-danger">Loading</a>
//       </div>
//     ) : (
//       <div className="d-flex">{/* */}</div>
//     )}
//   </nav>
// );
