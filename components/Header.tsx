
"use client";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";


interface HeaderProps {
    children: React.ReactNode;
    className?: string;
}

const Header: React.FC<HeaderProps> = ({
    children,
    className,
}) => {
    const router = useRouter();


    const handleLogout = async () => {

    }
    return (
        <div className={twMerge(`
        h-fit 
        bg-gradient-to-b 
        from-cyan-800 
        p-6
        `,
        className
        )}>
            <div className="w-full mb-4 flex items-center justify-between">
                <div className="hidden md:flex gap-x-2 items-center">
                    <button 
                        onClick={() => router.back()} 
                        className="
                        rounded-full 
                      bg-black 
                        flex 
                        items-center 
                        justify-center 
                        cursor-pointer 
                        hover:opacity-75 
                        transition
                        "
                        >
                        <RxCaretLeft className="text-white" size={30} />
                    </button>
                    <button
                        onClick={() => router.forward()} 
                        className="
                        rounded-full 
                         bg-black 
                        flex 
                        items-center 
                        justify-center 
                        cursor-pointer 
                        hover:opacity-75 
                        transition
                        "
                    >
                        <RxCaretRight className="text-white" size={30} />
                    </button>
                </div>



                
            </div>
        </div>
        
    )
}

export default Header
