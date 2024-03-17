import React from "react";
import { Button } from "@/components/ui";
import Home from "@/app/page";

const Page = () => {
    return (
        <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
            <iframe src="https://jnmprojects.github.io/NoPlus/storybook/" style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, width: '100%', height: '100%', border: 'none', overflow: "hidden" }}></iframe>
            <Button icon="X" style={{ position: 'absolute', bottom: 0, right: 0 }} />
        </div>
    );
};

export default Page;