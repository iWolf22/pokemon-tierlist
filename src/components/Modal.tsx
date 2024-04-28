"use client";

import { useRouter } from "next/navigation";

export default function Modal(props: { children: React.ReactNode }) {

    const router = useRouter();

    return (
        <div onClick={() => {router.back()}} className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
            <div className="p-8 border w-96 shadow-lg rounded-md bg-white">
                {props.children}
            </div>
        </div>
    );
}