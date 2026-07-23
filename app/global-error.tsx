"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0d1b4b",
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
          padding: "1.5rem",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "1.5rem", color: "#B8872A" }}>
          Something went wrong
        </h1>
        <p style={{ marginTop: "1rem", maxWidth: "28rem", opacity: 0.7 }}>
          {error.message || "An unexpected error occurred."}
        </p>
        <button
          type="button"
          onClick={() => reset()}
          style={{
            marginTop: "2rem",
            padding: "0.625rem 1.5rem",
            backgroundColor: "#B8872A",
            color: "#120a04",
            border: "none",
            borderRadius: "2px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
