import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL as string,
    headers: {
        "x-apisports-key": import.meta.env.VITE_API_KEY as string
    }
});

export default axiosInstance;

function resolveURLPath(path: string) {
    return new URL(path).href.replace(/\/{2,}/g, "/");
}
function resolvePath(path: string) {
    return path.replace(/\/{2,}/g, "/");
}

export { resolvePath, resolveURLPath };
