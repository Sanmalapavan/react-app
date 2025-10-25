import React, { useEffect, useState } from "react";
import { Typography, Stack, CircularProgress } from "@mui/material";
import RecipeReviewCard from "../Components/RecipeCard";
import ResponsiveAppBar from "../Components/Navbar";

function Home() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const ac = new AbortController();
        const load = async () => {
            try {
                setLoading(true);
                const res = await fetch("https://dummyjson.com/recipes", { signal: ac.signal });
                const data = await res.json();
                setPosts(data.recipes || []);
            } catch (err) {
                if (err.name !== "AbortError") setError(err.message || "Failed to load");
            } finally {
                setLoading(false);
            }
        };
        load();
        return () => ac.abort();
    }, []);

    return (
        <>
            <ResponsiveAppBar />
            <Stack spacing={5} mt={2} sx={{ display: "flex", alignItems: "center" }}>
                {loading ? (
                    <CircularProgress />
                ) : error ? (
                    <Typography color="error">Error: {error}</Typography>
                ) : posts.length === 0 ? (
                    <Typography>No recipes found.</Typography>
                ) : (
                    posts.map((post, index) => (
                        <RecipeReviewCard key={post.id ?? index} post={post} />
                    ))
                )}
            </Stack>
        </>
    );
}

export default Home;