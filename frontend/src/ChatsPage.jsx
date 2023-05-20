import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'
//import { PrettyChatWindow } from 'react-chat-engine-pretty'
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        CHAT_ENGINE_PROJECT_ID,
        props.user.username,
        props.user.secret
    );
    /*return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
                projectId=CHAT_ENGINE_PROJECT_ID
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%' }} />
        </div>
    )*/
    return (
        <div style={{ height: '100vh' }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
        </div>
    )
}

export default ChatsPage