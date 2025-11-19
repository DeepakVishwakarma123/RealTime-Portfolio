import React from "react";

const Home = () => {
    const randomImage = "https://source.unsplash.com/random/800x600?person";

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h1 style={styles.title}>I am Deepak</h1>
                <p style={styles.subtitle}>
                    A simple React homepage with a random image and a two-column layout.
                </p>
            </div>

            <div style={styles.card}>
                <img
                    src={randomImage}
                    alt="Random"
                    style={styles.image}
                />
            </div>

            {/* Inline responsive CSS */}
            <style>{`
                @media (max-width: 700px) {
                    .home-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </div>
    );
};

const styles = {
    container: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "20px",
        alignItems: "center",
        padding: "24px",
        minHeight: "60vh",
        fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
    },
    card: {
        padding: "16px",
        borderRadius: "8px",
        boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
        background: "#fff",
    },
    title: {
        margin: 0,
        fontSize: "28px",
        fontWeight: 700,
    },
    subtitle: {
        marginTop: "8px",
        color: "#555",
    },
    image: {
        width: "100%",
        height: "320px",
        objectFit: "cover",
        borderRadius: "6px",
        display: "block",
    },
};

// Add className for responsive CSS to work
const WrappedHome = () => <div className="home-grid"><Home /></div>;

// Export the main component (use WrappedHome to include responsive class)
export default WrappedHome;