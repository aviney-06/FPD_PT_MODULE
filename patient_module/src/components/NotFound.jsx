import React from "react"

function NotFound() {
  return (
    <>
      <div className="container" style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}>
        <div style={{
          color: "grey",
          fontSize: "7rem",
          fontWeight: "bold",
          height: "fit-content",
          width: "fit-content",
          // background: "#f1f1f1",
          padding: "2rem 3rem",
          borderRadius: "2px",
          boxShadow: ""
        }}>Not Found!!</div>
      </div>
    </>
  )
}

export default NotFound
