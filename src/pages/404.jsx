export default function NotFound() {
  return (
    <div className="error-wrapper">
      <h1>Page not found</h1>
      <button onClick={() => history.go(-1)}>Go Back</button>
    </div>
  );
}
