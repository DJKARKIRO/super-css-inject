import { env } from "../utils";

export function PopupPreferences () {
    const openOptionsPage = () => env.runtime.openOptionsPage();

    return (
        <div
            className="preferences"
            data-action="preferences"
            title="Options"
            onClick={openOptionsPage}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="212 11.001 16 15.999"
                width="16pt"
                height="15.999pt"
            >
                <path d=" M 227.789 13.868 L 227.612 13.332 L 224.786 16.158 L 223.398 15.602 L 222.843 14.215 L 225.669 11.389 L 225.133 11.212 C 224.711 11.073 224.27 11.001 223.826 11.001 C 221.525 11.001 219.652 12.873 219.652 15.175 C 219.652 15.689 219.746 16.192 219.933 16.673 L 212.496 24.11 C 212.176 24.429 212 24.855 212 25.307 C 212 25.76 212.176 26.185 212.496 26.505 C 212.826 26.835 213.26 27 213.694 27 C 214.127 27 214.561 26.835 214.891 26.505 L 222.328 19.068 C 222.808 19.254 223.312 19.349 223.826 19.349 C 226.128 19.349 228 17.476 228 15.175 C 228 14.733 227.929 14.294 227.789 13.868 Z " />
            </svg>
        </div>
    );
}
