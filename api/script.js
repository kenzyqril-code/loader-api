export default async function handler(req, res) {

    const ua = req.headers["user-agent"] || ""

    if (ua.includes("Mozilla")) {
        return res.status(403).send("Access Denied")
    }

    const response = await fetch("https://raw.githubusercontent.com/kenzyqril-code/FTF-Script-By-Zyqril-/refs/heads/main/FTF%20Official%20Script")
    const text = await response.text()

    res.setHeader("Content-Type", "text/plain")
    res.status(200).send(text)
}
