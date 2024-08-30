export default function Banner({ scale = 1}) {

    return (
        <svg width={Math.floor(337 * scale)} height={Math.floor(179 * scale)} viewBox="0 0 337 179" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="337" height="179" fill="#D9D9D9" />
            <path d="M24 8L308.056 167.963C312.056 170.216 317 167.325 317 162.735V18.2648C317 13.6746 312.056 10.7844 308.056 13.0368L24 173" stroke="black" />
        </svg>
    )
}