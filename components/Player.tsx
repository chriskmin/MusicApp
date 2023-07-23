"use client"
import usePlayer from "@/hooks/usePlayer"
import useURLSongLoad from "@/hooks/useURLSongLoad";
import usesongid from "@/hooks/usesongid";
import PlayerContent from "./PlayerContent";


const Player = () => {
    const player = usePlayer();
    const {song} = usesongid(player.activeId)
    const songUrl = useURLSongLoad(song!);

    
    if (!song || !songUrl || !player.activeId) {
        return null;
    }


    return(

        <div className="
        fixed 
        bottom-0 
        bg-black 
        w-full 
        py-2 
        h-[80px] 
        px-4
        "
        >
            <PlayerContent
                key={songUrl}
                song={song}
                songUrl={songUrl}

            />

        </div>
    )

}

export default Player
