export default async function handler(req, res) {
    const ua = req.headers["user-agent"] || "";

    // Allow only Roblox HttpService
    const isRoblox = ua.includes("RobloxGameCloud") || ua.includes("Roblox");

    // Block browsers and common tools
    if (!isRoblox) {
        return res.status(403).send("Access Denied");
    }

    try {
        const scriptUrl = "https://raw.githubusercontent.com/kenzyqril-code/Wolf-Or-Other-Script-By-Zyqril-/refs/heads/main/Wolf%20Or%20Other%20Official%20Script";

        const response = await fetch(scriptUrl);

        if (!response.ok) {
            return res.status(500).send("-- Script failed to load");
        }

        const script = await response.text();

        // Important headers for Roblox
        res.setHeader("Content-Type", "text/plain");
        res.setHeader("Cache-Control", "no-store, no-cache");
        res.setHeader("Pragma", "no-cache");

        res.status(200).send(script);
    } catch (error) {
        res.status(500).send("-- Internal Server Error");
    }
}
