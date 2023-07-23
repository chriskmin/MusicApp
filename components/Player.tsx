"use client"
import usePlayer from "@/hooks/usePlayer"
import useURLSongLoad from "@/hooks/useURLSongLoad";
import usesongid from "@/hooks/usesongid";


const Player = () => {
    const player = usePlayer();
    const {song} = usesongid(player.activeId)
    const songUrl = useURLSongLoad(song!);

    
    if (!song || !songUrl || !player.activeId) {
        return null;
    }


    return(

        <div>


        </div>
    )

}

export default Player
