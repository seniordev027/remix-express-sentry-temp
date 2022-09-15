import { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
    throw new Error("Error!");
};

export default function ErrorRoute() {
    return null;
}
