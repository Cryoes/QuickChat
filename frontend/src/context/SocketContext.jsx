import { createContext, useEffect, useState, useContext } from "react"
import { useAuthContext } from "./AuthContext"
import io from "socket.io-client"

export const SocketContext = createContext()

export const useSocketContext = () => {
	return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
    const [socket,setSocket] = useState()
    const [onlineUsers,setOnlineUsers] = useState([])
    const {authUser} = useAuthContext();

    useEffect(()=> {
        if(authUser){
            //Server Information
            const socket = io("https://quickchat-e70r.onrender.com/",
            {
                query:{
                    userId: authUser._id,
                }
            }
            )

            setSocket(socket);
            //socket.on() is used to listen to events. Can be run client/server side
            socket.on("getOnlineUsers", (users) =>{
                setOnlineUsers(users)
            })

            return () => socket.close()
        } else {
            if(socket){
                socket.close()
                setSocket(null)
            }
        }
    }, [authUser])

    


    return (
        <SocketContext.Provider value={{socket,onlineUsers}}>
            {children}
        </SocketContext.Provider>
    )
}